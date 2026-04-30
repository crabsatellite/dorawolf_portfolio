import { defineConfig } from "astro/config";
import remarkPrependBase from "./src/plugins/remark-prepend-base.mjs";
import rehypePicture from "./src/plugins/rehype-picture.mjs";
import rehypeImageTypes from "./src/plugins/rehype-image-types.mjs";
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
          sizes:
            "(min-width: 1024px) 50vw, (min-width: 720px) 70vw, 100vw",
        },
      ],
      [rehypeImageTypes, { baseUrl: BASE }],
      [rehypeSectionPlates, {}],
    ],
    smartypants: true,
  },
});
