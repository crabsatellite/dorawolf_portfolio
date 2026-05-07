/**
 * Pre-build step: fetch all archive cover + gallery images from the year-repos
 * on GitHub and stash them under public/archive/<id>/<rel>.
 *
 * Why: raw.githubusercontent.com is blocked / DNS-poisoned in mainland China,
 * so cards would render as broken-image icons for visitors there. By copying
 * images into public/ at build time we serve them from the same domain as the
 * site (dorawolf.com → Cloudflare CDN), which is reliably reachable from CN.
 *
 * Downloads (PDFs / models / simulation packs / archives) stay on
 * raw.githubusercontent.com because (a) they're large and (b) they only fire
 * when a visitor clicks the explicit "↓" button.
 *
 * Idempotent — re-runs skip files already on disk.
 */
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const SITE_ROOT = path.resolve(path.dirname(__filename), "..");
const MANIFEST_PATH = path.join(SITE_ROOT, "data", "works-manifest.json");
const PUBLIC_ARCHIVE = path.join(SITE_ROOT, "public", "archive");

const PROJECT_RAW_PREFIX_RE = /^https:\/\/raw\.githubusercontent\.com\//;

/**
 * Convert a raw.githubusercontent.com URL like
 *   https://raw.githubusercontent.com/DoraWolf/2026/master/<id>/images/1.png
 * (with %-encoded path segments) into the relative path AFTER the project id,
 * given the project id we know.
 *
 * Returns null if the URL doesn't contain the id.
 */
function relAfterProjectId(rawUrl, projectId) {
  if (!PROJECT_RAW_PREFIX_RE.test(rawUrl)) return null;
  const decodedPath = decodeURI(new URL(rawUrl).pathname);
  const needle = `/${projectId}/`;
  const idx = decodedPath.indexOf(needle);
  if (idx < 0) return null;
  return decodedPath.slice(idx + needle.length);
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function downloadIfMissing(rawUrl, destAbs) {
  if (await exists(destAbs)) return "kept";
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await ensureDir(path.dirname(destAbs));
  await fs.writeFile(destAbs, buf);
  return "downloaded";
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8"));
  let downloaded = 0, kept = 0, failed = 0;

  for (const p of manifest.projects) {
    // Collect every raw URL we want to mirror locally for this project,
    // de-duplicated (cover_url often equals gallery[0]).
    const items = [];
    if (p.cover_url) items.push(p.cover_url);
    for (const g of (p.gallery || [])) items.push(g.url);
    const seen = new Set();
    const unique = items.filter((u) => !seen.has(u) && (seen.add(u), true));

    for (const u of unique) {
      const rel = relAfterProjectId(u, p.id);
      if (!rel) {
        console.warn(`[skip] ${p.id}: cannot derive local path from ${u}`);
        continue;
      }
      const destAbs = path.join(PUBLIC_ARCHIVE, p.id, rel);
      try {
        const status = await downloadIfMissing(u, destAbs);
        if (status === "downloaded") downloaded += 1; else kept += 1;
      } catch (e) {
        failed += 1;
        console.error(`[fail] ${u}: ${e.message}`);
      }
    }
  }

  console.log(
    `[fetch-archive-images] downloaded=${downloaded} kept=${kept} failed=${failed}`
  );
  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
