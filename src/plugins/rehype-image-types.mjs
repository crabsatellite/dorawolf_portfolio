/**
 * Stamps each markdown-body <picture> with attributes from the
 * data/image-classifications/<slug>.json sidecars:
 *   - data-type: site-plan | diagram | sketch | axon | render | photo | collage
 *   - data-caption-zh: short Chinese caption (museum plaque)
 *   - data-caption-en: short English caption (optional)
 *
 * The CSS in global.css then sizes each picture by type via grid spans
 * inside .plate__media-grid, and renders the locale-appropriate caption
 * below each image via a `::after` rule keyed off the html[lang^="…"]
 * selector.
 *
 * Runs after rehype-picture (which created the <picture> wrappers).
 */
import fs from "node:fs";
import path from "node:path";

function loadAll() {
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

export default function rehypeImageTypes(opts = {}) {
  const baseUrl = (opts.baseUrl || "").replace(/\/+$/, "");
  const map = loadAll();

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
      const meta = map[lookup];
      if (!meta) return;
      pic.properties = pic.properties || {};
      pic.properties["data-type"] = meta.type;
      if (meta.caption) {
        pic.properties["data-caption-zh"] = meta.caption;
      }
      if (meta.captionEn) {
        pic.properties["data-caption-en"] = meta.captionEn;
      }
    }

    visit(tree);
  };
}
