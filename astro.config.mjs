import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://crabsatellite.github.io",
  base: "/dorawolf_portfolio",
  trailingSlash: "ignore",
  build: {
    assets: "_astro",
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
