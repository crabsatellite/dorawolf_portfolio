import { defineConfig } from "astro/config";
import remarkPrependBase from "./src/plugins/remark-prepend-base.mjs";

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
    smartypants: true,
  },
});
