/**
 * UI string table. Two locales — `zh` (default) and `en`.
 *
 * Add a new key:
 *   1. Add it to BOTH `zh` and `en` blocks below.
 *   2. Use `t(lang, "your.key")` in any .astro page or component.
 *
 * Long-form content (bio, project body, etc.) belongs in data/ JSON or
 * src/content/ — not here.
 */

export type Lang = "zh" | "en";

export const LOCALES: Lang[] = ["zh", "en"];
export const DEFAULT_LANG: Lang = "zh";

const strings = {
  zh: {
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.research": "研究",
    "nav.timeline": "履历",
    "nav.home_aria": "{name} — 主页",
    "nav.lang_switch_aria": "切换语言",

    "home.eyebrow": "{range}",
    "home.hero": ["建筑读它的", "场地", "气候", "以及居于其中的人"],
    "home.lede":
      "DoraWolf 工作室坐落于武汉,以教育建筑、基础设施与公共建筑为主要工作范围。每个方案先以读地形落笔——读地形、读气候、读公共边界——再用一套精炼的计算工具:Sketchup、Grasshopper、Rhino、Ladybug。",
    "home.cta_view_projects": "进入作品",
    "home.cta_about": "关于工作室",
    "home.section_index_eyebrow": "作品",
    "home.section_index_title": "作品",
    "home.section_all_link": "全部 {count} 件",
    "home.section_threads_eyebrow": "工作室",
    "home.section_threads_title": "三条线索",
    "home.thread_1_title": "以场地为起点",
    "home.thread_1_body":
      "形态从场地已经存在的事物中生发——等高线、主导风向、人们已习惯穿越的路径。读完场地,方案才落笔。",
    "home.thread_2_title": "工具是器具",
    "home.thread_2_body":
      "Sketchup 与 Grasshopper 是工作室日常的核心,Rhino 用于细部,Ladybug 用于早期日照与能耗。工具是器具,不是设计本身。",
    "home.thread_3_title": "公共可读性",
    "home.thread_3_body":
      "公共建筑欠街道一份冷静的可读性。可能时,方案化为一条安静的基准线——先于内部的任何复杂。",
    "home.featured_eyebrow": "首件 · {year}",
    "home.featured_cta": "进入",

    "projects.title": "作品",
    "projects.eyebrow": "{count} 件作品",
    "projects.h1": "作品",
    "projects.lede":
      "学校、竞赛与工作室时期的方案按年序排列。每件附短引与设计意图。",
    "projects.read": "进入",

    "case.eyebrow": "作品 · {year}",
    "case.attribution":
      "工作室早期作品 · 中信建筑设计研究总院 · 2021 — 2023",
    "case.lede_zh_label": "原文",
    "case.meta_date": "日期",
    "case.meta_location": "坐标",
    "case.meta_role": "角色",
    "case.meta_typology": "类型",
    "case.back": "← 全部作品",
    "case.prev": "上一件",
    "case.next": "下一件",
    "case.body_note": "正文为中文。",

    "research.title": "研究",
    "research.eyebrow": "研究",
    "research.h1": ["工具是", "器具", ",不是设计本身。"],
    "research.lede":
      "计算工具的价值在于让工作室能更诚实、更高效地探索更多可能。Sketchup 与 Grasshopper 两条长期研究合集于此。",
    "research.read": "阅读研究",
    "research.back": "← 全部研究",
    "research.note":
      "未列入此处的工具——那些看起来惊艳却很少在实战方案中使用的——并不获得专属页面。工作室更看重一套小而精的工具。",

    "about.title": "关于",
    "about.eyebrow": "关于",
    "about.h1_role": "建筑师",
    "about.h1_after": ",设计师,工作室创始人。",
    "about.h2_bio": "关于工作室",
    "about.h2_studio": "DoraWolf 工作室",
    "about.h2_education": "教育背景",
    "about.h2_practice": "工作室",
    "about.h2_record": "作品在册",
    "about.h2_awards": "奖项",
    "about.h2_tools": "工具",
    "about.kv_based": "坐标",
    "about.kv_languages": "语言",
    "about.kv_works_in": "领域",
    "about.kv_email": "邮箱",
    "about.tools_modeling": "建模",
    "about.tools_rendering": "渲染",
    "about.tools_drafting": "施工图",
    "about.tools_graphics": "图形",
    "about.tools_ai": "AI / 生成",
    "about.kind_practice": "实践",
    "about.kind_education": "教育",

    "timeline.title": "履历",
    "timeline.eyebrow": "履历",
    "timeline.h1": ["DoraWolf 工作室", "之前与之后。"],

    "footer.contact": "联系",
    "footer.studio": "工作室",
    "footer.links": "链接",
    "footer.source": "源代码 · GitHub",
    "footer.rights": "© {year} {fullName}. 保留所有权利。",
    "footer.credit": "于 {year} 设计与构建。",

    "404.eyebrow": "404",
    "404.h1": ["这个页面", "不在这里。"],
    "404.lede": "你在找的页面已迁移或在重新设计的网站上不存在。",
    "404.back": "回到主页",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.timeline": "Timeline",
    "nav.home_aria": "{name} — home",
    "nav.lang_switch_aria": "Switch language",

    "home.eyebrow": "{range}",
    "home.hero": [
      "Architecture reads its",
      "site",
      "climate",
      "and the people who inhabit it.",
    ],
    "home.lede":
      "DoraWolf Studio works primarily in education, infrastructure, and public buildings, based in {location}. Every project begins with the contour of the site, and a small kit of computational tools — Sketchup, Grasshopper, Rhino, Ladybug — carries that reading until the design has the precision to be built.",
    "home.cta_view_projects": "Enter the works",
    "home.cta_about": "About the studio",
    "home.section_index_eyebrow": "Works",
    "home.section_index_title": "Selected works",
    "home.section_all_link": "All {count} works",
    "home.section_threads_eyebrow": "Studio",
    "home.section_threads_title": "Three threads",
    "home.thread_1_title": "Site as origin",
    "home.thread_1_body":
      "Form follows from what the site already offers — the contour, the prevailing wind, the way people already cross the land. Read the site first, then begin.",
    "home.thread_2_title": "Tools as instruments",
    "home.thread_2_body":
      "Sketchup and Grasshopper sit at the centre of the studio's daily work; Rhino for detail; Ladybug for early daylight and energy. Tools are an instrument, not the design.",
    "home.thread_3_title": "Public legibility",
    "home.thread_3_body":
      "Public buildings owe the street a calm, legible reading. Where possible, schemes resolve to a single quiet datum — visible from the city before any internal complexity reveals itself.",
    "home.featured_eyebrow": "Featured · {year}",
    "home.featured_cta": "Open",

    "projects.title": "Works",
    "projects.eyebrow": "{count} works",
    "projects.h1": "Works.",
    "projects.lede":
      "School, competition, and studio-years schemes arranged chronologically. Each carries a short brief and the design intent that drove it.",
    "projects.read": "Open",

    "case.eyebrow": "Work · {year}",
    "case.attribution":
      "Early studio work · realised at China Architecture Design & Research Group · 2021 — 2023",
    "case.lede_zh_label": "Original text",
    "case.meta_date": "Date",
    "case.meta_location": "Location",
    "case.meta_role": "Role",
    "case.meta_typology": "Typology",
    "case.back": "← All works",
    "case.prev": "Previous",
    "case.next": "Next",
    "case.body_note": "The case-study text below is in Chinese.",

    "research.title": "Research",
    "research.eyebrow": "Research",
    "research.h1": ["Tools as", "instruments", ", not the design."],
    "research.lede":
      "Computational tools earn their place when they let the studio test more alternatives, more honestly, in less time. Two long studies — Sketchup and Grasshopper — collected here as ongoing logs.",
    "research.read": "Read study",
    "research.back": "← All research",
    "research.note":
      "Tools that look impressive but are rarely used in real schemes don't earn a page. The studio prefers a small kit, used well.",

    "about.title": "About",
    "about.eyebrow": "About",
    "about.h1_role": "architect",
    "about.h1_after": ", designer, studio founder.",
    "about.h2_bio": "About the studio",
    "about.h2_studio": "DoraWolf Studio",
    "about.h2_education": "Education",
    "about.h2_practice": "Studio",
    "about.h2_record": "Works on record",
    "about.h2_awards": "Awards",
    "about.h2_tools": "Tools",
    "about.kv_based": "Based in",
    "about.kv_languages": "Languages",
    "about.kv_works_in": "Works in",
    "about.kv_email": "Email",
    "about.tools_modeling": "Modeling",
    "about.tools_rendering": "Rendering",
    "about.tools_drafting": "Drafting",
    "about.tools_graphics": "Graphics",
    "about.tools_ai": "AI / Generative",
    "about.kind_practice": "Practice",
    "about.kind_education": "Education",

    "timeline.title": "Timeline",
    "timeline.eyebrow": "Timeline",
    "timeline.h1": ["DoraWolf Studio,", "before and since."],

    "footer.contact": "Contact",
    "footer.studio": "Studio",
    "footer.links": "Links",
    "footer.source": "Source · GitHub",
    "footer.rights": "© {year} {fullName}. All rights reserved.",
    "footer.credit": "Designed and built {year}.",

    "404.eyebrow": "404",
    "404.h1": ["This page", "isn't here."],
    "404.lede":
      "The page you're looking for has moved or doesn't exist on the redesigned site yet.",
    "404.back": "Back to home",
  },
} as const;

type StringMap = (typeof strings)[Lang];
export type StringKey = keyof StringMap;

export function t<K extends StringKey>(
  lang: Lang,
  key: K,
  vars?: Record<string, string | number>
): StringMap[K] {
  const tbl = strings[lang] || strings[DEFAULT_LANG];
  let value: any = (tbl as any)[key];
  if (value === undefined) value = (strings[DEFAULT_LANG] as any)[key] ?? key;
  if (typeof value === "string" && vars) {
    value = value.replace(/\{(\w+)\}/g, (_: string, k: string) =>
      vars[k] !== undefined ? String(vars[k]) : `{${k}}`
    );
  }
  return value as StringMap[K];
}

export function langFromPath(pathname: string): Lang {
  return pathname.startsWith("/en/") || pathname === "/en" ? "en" : "zh";
}

/** Build a path for a given lang. Used by lang switcher in nav. */
export function pathForLang(currentPath: string, targetLang: Lang, base = ""): string {
  // strip base prefix if present
  let p = currentPath;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  // normalise
  p = p.replace(/^\/+|\/+$/g, "");
  // strip /en prefix
  if (p === "en" || p.startsWith("en/")) {
    p = p === "en" ? "" : p.slice(3);
  }
  // build for target
  const target = targetLang === "en" ? (p ? `en/${p}` : "en") : p;
  const trimmedBase = base.replace(/\/+$/, "");
  return `${trimmedBase}/${target}${target ? "/" : ""}`;
}
