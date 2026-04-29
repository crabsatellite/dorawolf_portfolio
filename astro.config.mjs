import { defineConfig } from "astro/config";
import remarkPrependBase from "./src/plugins/remark-prepend-base.mjs";
import rehypePicture from "./src/plugins/rehype-picture.mjs";
import rehypeSectionPlates from "./src/plugins/rehype-section-plates.mjs";

const SITE = "https://crabsatellite.github.io";
const BASE = "/dorawolf_portfolio";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  build: {
    assets: "_astro",
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  markdown: {
    remarkPlugins: [[remarkPrependBase, BASE]],
    rehypePlugins: [
      [
        rehypePicture,
        {
          baseUrl: BASE,
          // Plate layout: image is roughly 50% viewport on desktop, 100% on
          // mobile. Browsers pick the smallest acceptable variant.
          sizes:
            "(min-width: 1024px) 50vw, (min-width: 720px) 70vw, 100vw",
        },
      ],
      [rehypeSectionPlates, {}],
    ],
    smartypants: true,
  },
});
