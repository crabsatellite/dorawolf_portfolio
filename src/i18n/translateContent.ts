/**
 * Translation maps for project frontmatter values that are stored in
 * English only (typology, location, role, status). Used by page bodies
 * so the Chinese version of the site doesn't show "Education / Wuhan,
 * Hubei / Architectural designer / schematic" alongside Chinese copy.
 */
import type { Lang } from "./strings";

type Map = Record<Lang, Record<string, string>>;

export const typologyTranslations: Map = {
  zh: {
    Education: "教育建筑",
    "Infrastructure / civic": "基础设施 · 公共",
    "Civic / cultural": "公共 · 文化",
    "Civic / infrastructure": "公共 · 基础设施",
    "Mixed-use / civic": "复合 · 公共",
  },
  en: {},
};

export const statusTranslations: Map = {
  zh: {
    concept: "概念",
    competition: "竞赛",
    schematic: "方案",
    built: "建成",
    ongoing: "进行中",
  },
  en: {
    concept: "concept",
    competition: "competition",
    schematic: "schematic",
    built: "built",
    ongoing: "ongoing",
  },
};

export const locationTranslations: Map = {
  zh: {
    "Wuhan, Hubei": "湖北 · 武汉",
    "Wuhan, China": "中国 · 武汉",
    "China, Wuhan": "中国 · 武汉",
  },
  en: {},
};

export const roleTranslations: Map = {
  zh: {
    "Architectural designer": "建筑设计",
    "Concept designer": "概念设计",
    "Founder & Principal architect": "创始人 / 主创建筑师",
  },
  en: {},
};

export function tr(map: Map, lang: Lang, value?: string | null): string {
  if (!value) return "";
  return map[lang]?.[value] ?? value;
}

/**
 * Expand `{now}` placeholder in a date-range string (e.g. "2023 — {now}")
 * to the current year at build time. Used for "Present" ranges so they
 * stay current without hand-editing.
 */
export function expandRange(s: string): string {
  const year = new Date().getFullYear();
  return s.replace(/\{now\}/g, String(year));
}

/** Pick the right summary for a project, depending on locale. */
export function pickSummary(
  lang: Lang,
  data: { summary: string; summaryZh?: string }
): string {
  if (lang === "zh" && data.summaryZh) return data.summaryZh;
  return data.summary;
}
