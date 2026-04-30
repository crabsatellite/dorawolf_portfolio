/**
 * Stamps each markdown-body <picture> with type metadata.
 *
 * Sources of type, in order of priority:
 *   1. data/image-classifications/<slug>.json — agent-classified type +
 *      bilingual caption from the per-project sidecar.
 *   2. Manifest entry's `animated` flag — GIFs picked up by build-images.
 *   3. <img src> ends in .gif — last-ditch fallback.
 *
 * Output attributes on the <picture>:
 *   data-type        — site-plan | diagram | sketch | axon | render |
 *                      photo | collage | gif
 *   data-caption-zh  — short Chinese caption (museum plaque)
 *   data-caption-en  — short English caption (optional)
 *
 * The CSS in global.css sizes each picture by type via grid spans
 * inside .plate__media-grid, and renders the locale-appropriate caption
 * below each image via a ::after rule keyed off html[lang^="…"].
 *
 * Runs AFTER rehype-picture (which created the <picture> wrappers).
 */
import fs from "node:fs";
import path from "node:path";

function loadClassifications() {
  const dir = path.join(process.cwd(), "data", "image-classifications");
  if (!fs.existsSync(dir)) return {};
  const map = {};
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"));
      for (const [k, v] of Object.entries(data)) {
        if (k.startsWith("$") || !v || typeof v !== "object") continue;
        if (typeof v.type !== "string") continue;
        map[k] = v;
      }
    } catch {
      // ignore parse errors
    }
  }
  return map;
}

function loadManifest() {
  const p = path.join(process.cwd(), "public", ".image-manifest.json");
  if (!fs.existsSync(p)) return {};
  try {
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return {};
  }
}

export default function rehypeImageTypes(opts = {}) {
  const baseUrl = (opts.baseUrl || "").replace(/\/+$/, "");
  const classifications = loadClassifications();
  const manifest = loadManifest();

  return function transformer(tree) {
    function visit(node) {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          if (
            child &&
            child.type === "element" &&
            child.tagName === "picture"
          ) {
            apply(child);
          }
          visit(child);
        }
      }
    }

    function apply(pic) {
      const img = (pic.children || []).find(
        (c) => c && c.type === "element" && c.tagName === "img"
      );
      if (!img || !img.properties) return;
      const src = img.properties.src;
      if (typeof src !== "string") return;

      let lookup = src;
      if (baseUrl && lookup.startsWith(baseUrl + "/")) {
        lookup = lookup.slice(baseUrl.length);
      }

      pic.properties = pic.properties || {};

      // Priority 1: agent classification (renders / diagrams / etc).
      const classified = classifications[lookup];
      if (classified) {
        pic.properties["data-type"] = classified.type;
        if (classified.caption) {
          pic.properties["data-caption-zh"] = classified.caption;
        }
        if (classified.captionEn) {
          pic.properties["data-caption-en"] = classified.captionEn;
        }
        return;
      }

      // Priority 2: manifest entry says animated.
      const m = manifest[lookup];
      if (m && m.animated) {
        pic.properties["data-type"] = "gif";
        pic.properties["data-animated"] = "true";
        return;
      }

      // Priority 3: src ends with .gif.
      if (/\.gif(\?|$)/i.test(src)) {
        pic.properties["data-type"] = "gif";
        pic.properties["data-animated"] = "true";
      }
    }

    visit(tree);
  };
}
