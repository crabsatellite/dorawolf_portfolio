/**
 * Convert a raw.githubusercontent.com URL for an archive project image
 * into the local /archive/<id>/<rel> path that gets served from dorawolf.com.
 *
 * This keeps the manifest canonical (URLs stay pointing at the GitHub source
 * of truth) while letting render time emit local URLs that work from
 * mainland China (where raw.githubusercontent.com is unreliable).
 *
 * The matching `public/archive/<id>/<rel>` files are populated by the
 * pre-build step `scripts/fetch-archive-images.mjs`.
 *
 * If the URL doesn't match the expected scheme, returns it unchanged — the
 * page will just hit GitHub directly, which is the previous behaviour.
 */

const RAW_PREFIX = "https://raw.githubusercontent.com/";
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export function localizeArchiveImage(rawUrl: string | null | undefined, projectId: string): string {
  if (!rawUrl) return "";
  if (!rawUrl.startsWith(RAW_PREFIX)) return rawUrl;

  let pathname: string;
  try {
    pathname = decodeURI(new URL(rawUrl).pathname);
  } catch {
    return rawUrl;
  }
  const needle = `/${projectId}/`;
  const idx = pathname.indexOf(needle);
  if (idx < 0) return rawUrl;

  const rel = pathname.slice(idx + needle.length);
  return `${BASE}/archive/${projectId}/${rel}`;
}
