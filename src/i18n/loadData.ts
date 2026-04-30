/**
 * Load locale-specific JSON data files (site / about). Falls back to
 * the default locale if a file is missing.
 */
import siteZh from "../../data/site.zh.json";
import siteEn from "../../data/site.en.json";
import aboutZh from "../../data/about.zh.json";
import aboutEn from "../../data/about.en.json";
import type { Lang } from "./strings";

export function loadSite(lang: Lang) {
  return lang === "en" ? siteEn : siteZh;
}

export function loadAbout(lang: Lang) {
  return lang === "en" ? aboutEn : aboutZh;
}
