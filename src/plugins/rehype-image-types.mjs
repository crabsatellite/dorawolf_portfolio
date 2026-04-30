/**
 * Reads per-project image classification JSONs from
 *   data/image-classifications/<slug>.json
 * and stamps each markdown-body <picture> with a data-type attribute
 * (site-plan / diagram / sketch / axon / render / photo / collage) and
 * an optional data-caption attribute.
 *
 * The CSS in global.css then sizes each <picture> appropriately
 * (e.g. sketches and small diagrams don't fill the full media column,
 * renderings/photos do).
 *
 * Runs AFTER rehype-picture (which created the <picture> wrappers) and
 * BEFORE rehype-section-plates (which only inspects <p> > picture pairs,
 * unaffected by added attributes).
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
      // Skip $comment / meta keys
      for (const [k, v] of Object.entries(data)) {
        if (k.startsWith("$") || !v || typeof v !== "object") continue;
        if (typeof v.type !== "string") continue;
        map[k] = v;
      }
    } catch {
      // ignore unparseable files
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
        pic.properties["data-caption"] = meta.caption;
      }
    }

    visit(tree);
  };
}
