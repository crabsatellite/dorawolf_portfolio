/**
 * Wraps every markdown <img> with a <picture> element containing AVIF and
 * WebP <source> sets in 800/1600/2400w plus the original image as fallback.
 * Reads variant data from public/.image-manifest.json (produced by
 * scripts/build-images.mjs).
 *
 * Self-contained — no third-party tree walker.
 */
import fs from "node:fs";
import path from "node:path";

function loadManifest() {
  const p = path.join(process.cwd(), "public", ".image-manifest.json");
  if (!fs.existsSync(p)) return {};
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return {};
  }
}

function variantPath(src, width, fmt) {
  return src.replace(/\.[^.]+$/, `-${width}.${fmt}`);
}

export default function rehypePicture(opts = {}) {
  const baseUrl = (opts.baseUrl || "").replace(/\/+$/, "");
  const sizes = opts.sizes || "(min-width: 920px) 760px, 100vw";
  const manifest = loadManifest();

  return function transformer(tree) {
    function visit(node) {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (
            child &&
            child.type === "element" &&
            child.tagName === "img"
          ) {
            const wrapped = wrap(child);
            if (wrapped !== child) {
              node.children[i] = wrapped;
              continue;
            }
          }
          visit(child);
        }
      }
    }

    function wrap(img) {
      const props = img.properties || {};
      const src = typeof props.src === "string" ? props.src : "";
      if (!src) return img;

      // Manifest is keyed by source-relative path (no baseUrl prefix)
      let lookup = src;
      if (baseUrl && lookup.startsWith(baseUrl + "/")) {
        lookup = lookup.slice(baseUrl.length);
      }
      const entry = manifest[lookup];
      if (!entry) return img;

      const sources = [];
      for (const fmt of ["avif", "webp"]) {
        const widths = entry.variants?.[fmt];
        if (!widths || widths.length === 0) continue;
        const srcset = widths
          .map(
            (w) =>
              `${baseUrl}${variantPath(lookup, w, fmt)} ${w}w`
          )
          .join(", ");
        sources.push({
          type: "element",
          tagName: "source",
          properties: { type: `image/${fmt}`, srcset, sizes },
          children: [],
        });
      }

      img.properties = {
        ...props,
        loading: props.loading || "lazy",
        decoding: "async",
        width: entry.width,
        height: entry.height,
      };

      return {
        type: "element",
        tagName: "picture",
        properties: {},
        children: [...sources, img],
      };
    }

    visit(tree);
  };
}
