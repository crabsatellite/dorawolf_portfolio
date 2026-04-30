/**
 * Wraps every markdown <img> with a <picture> containing AVIF and WebP
 * <source> sets plus the original as fallback. Reads variant data from
 * public/.image-manifest.json (produced by scripts/build-images.mjs).
 *
 * Adds:
 *  - explicit width/height attrs (so the browser can reserve layout space)
 *  - loading="lazy" + decoding="async" on below-fold imgs
 *  - inline base64 LQIP on the <picture> element as a CSS background, so
 *    a tiny blurred placeholder paints before the real image arrives
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
  const sizes = opts.sizes || "(min-width: 1024px) 50vw, (min-width: 720px) 70vw, 100vw";
  const manifest = loadManifest();

  return function transformer(tree) {
    function visit(node) {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child && child.type === "element" && child.tagName === "img") {
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

      let lookup = src;
      if (baseUrl && lookup.startsWith(baseUrl + "/")) {
        lookup = lookup.slice(baseUrl.length);
      }
      const entry = manifest[lookup];
      if (!entry) {
        // No manifest entry — still wrap the img in a <picture class="lqip">
        // so the lightbox click handler, fade-in, and grid sizing all work.
        // Most likely this is a GIF or other format we don't pre-process.
        img.properties = {
          ...props,
          loading: props.loading || "lazy",
          decoding: "async",
        };
        return {
          type: "element",
          tagName: "picture",
          properties: { className: ["lqip"] },
          children: [img],
        };
      }

      const sources = [];
      for (const fmt of ["avif", "webp"]) {
        const widths = entry.variants?.[fmt];
        if (!widths || widths.length === 0) continue;
        const srcset = widths
          .map((w) => `${baseUrl}${variantPath(lookup, w, fmt)} ${w}w`)
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

      const pictureProps = {
        className: ["lqip"],
      };
      if (entry.lqip) {
        pictureProps.style = `--lqip:url('${entry.lqip}')`;
      }

      return {
        type: "element",
        tagName: "picture",
        properties: pictureProps,
        children: [...sources, img],
      };
    }

    visit(tree);
  };
}
