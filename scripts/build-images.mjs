/**
 * Pre-build step: walk public/{projects,research}/ for jpg/png originals and
 * emit AVIF + WebP variants at 800w / 1600w / 2400w. Writes a manifest at
 * public/.image-manifest.json that the rehype-picture plugin reads at build
 * time to wrap markdown <img> with proper <picture> srcsets.
 *
 * Idempotent — re-runs skip variants that already exist on disk.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";

const __filename = url.fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const TARGET_SUBDIRS = ["projects", "research"];
const SIZES = [800, 1600, 2400];
const FORMATS = ["avif", "webp"];
const QUALITY = { avif: 55, webp: 80 };
// AVIF effort 0–9 — higher = better compression, much slower. 3 is the
// sweet spot for CI: ~2-3x faster than 4 for ~5% larger files.
const AVIF_EFFORT = 3;
const SUFFIX_RE = /-(800|1600|2400)\.(avif|webp)$/i;
const ORIGINAL_RE = /\.(jpe?g|png)$/i;

async function* walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (e.isFile() && ORIGINAL_RE.test(e.name) && !SUFFIX_RE.test(e.name)) {
      yield full;
    }
  }
}

function relPosix(p) {
  return "/" + path.relative(PUBLIC_DIR, p).split(path.sep).join("/");
}

async function main() {
  sharp.cache(false);
  sharp.concurrency(Math.max(2, (await import("node:os")).cpus().length - 1));

  const manifest = {};
  const targets = TARGET_SUBDIRS
    .map((d) => path.join(PUBLIC_DIR, d))
    .filter((d) => fs.existsSync(d));

  let processed = 0;
  let generated = 0;
  let skipped = 0;
  const t0 = Date.now();

  for (const dir of targets) {
    for await (const file of walk(dir)) {
      processed++;
      const rel = relPosix(file);
      const ext = path.extname(file);
      const dirOf = path.dirname(file);
      const base = path.basename(file, ext);

      let meta;
      try {
        meta = await sharp(file).metadata();
      } catch (err) {
        console.warn(`  ! could not read metadata for ${rel}: ${err.message}`);
        continue;
      }
      const origW = meta.width ?? 0;
      const origH = meta.height ?? 0;

      const variants = { avif: [], webp: [] };

      // Decide which sizes apply (skip upscaling)
      const usableSizes = SIZES.filter((w) => w <= origW * 1.05);
      // If original is smaller than smallest size, fall back to original-size variant
      if (usableSizes.length === 0 && origW > 0) {
        for (const fmt of FORMATS) {
          const out = path.join(dirOf, `${base}.${fmt}`);
          if (!fs.existsSync(out)) {
            await sharp(file)
              .toFormat(fmt, { quality: QUALITY[fmt], effort: fmt === "avif" ? AVIF_EFFORT : 4 })
              .toFile(out);
            generated++;
          } else {
            skipped++;
          }
          variants[fmt].push(origW);
        }
      } else {
        for (const w of usableSizes) {
          for (const fmt of FORMATS) {
            const out = path.join(dirOf, `${base}-${w}.${fmt}`);
            if (!fs.existsSync(out)) {
              await sharp(file)
                .resize({ width: w, withoutEnlargement: true })
                .toFormat(fmt, { quality: QUALITY[fmt], effort: fmt === "avif" ? AVIF_EFFORT : 4 })
                .toFile(out);
              generated++;
            } else {
              skipped++;
            }
            variants[fmt].push(w);
          }
        }
      }

      manifest[rel] = {
        width: origW,
        height: origH,
        variants,
      };

      if (processed % 25 === 0) {
        process.stdout.write(
          `  · processed ${processed} (gen ${generated}, skip ${skipped})\r`
        );
      }
    }
  }

  fs.writeFileSync(
    path.join(PUBLIC_DIR, ".image-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(
    `\nimages: ${processed} originals · ${generated} variants generated · ${skipped} cached · ${elapsed}s`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
