import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const STATIC_PAGES = ["", "about", "projects", "research", "timeline"];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const origin = (site || new URL("https://crabsatellite.github.io")).origin;
  const root = origin + baseUrl;

  const projects = (await getCollection("projects", ({ data }) => !data.draft))
    .map((p) => ({ url: `/projects/${p.slug}`, lastmod: undefined }));
  const research = (await getCollection("research", ({ data }) => !data.draft))
    .map((r) => ({ url: `/research/${r.slug}`, lastmod: undefined }));

  const urls = [
    ...STATIC_PAGES.map((p) => ({ url: p ? `/${p}` : "/", lastmod: undefined })),
    ...projects,
    ...research,
  ];

  const today = new Date().toISOString().slice(0, 10);
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url><loc>${root}${u.url}</loc><lastmod>${u.lastmod || today}</lastmod></url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
