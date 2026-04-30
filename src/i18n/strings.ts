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
    "nav.timeline": "起点",
    "nav.home_aria": "{name} 主页",
    "nav.lang_switch_aria": "切换语言",

    "home.eyebrow": "{range}",
    "home.hero": ["我们关注", "场地", "气候", "还有住在里面的人"],
    "home.lede":
      "DoraWolf 工作室在武汉，主要做教育、基础设施和公共建筑。每个项目先看场地的地形、气候和周边，再用 Sketchup、Grasshopper、Rhino、Ladybug 把方案画出来。",
    "home.cta_view_projects": "进入作品",
    "home.cta_about": "关于工作室",
    "home.section_index_eyebrow": "作品",
    "home.section_index_title": "作品",
    "home.section_all_link": "全部 {count} 件",
    "home.section_threads_eyebrow": "工作室",
    "home.section_threads_title": "三条线索",
    "home.thread_1_title": "从场地开始",
    "home.thread_1_body":
      "形态从场地里已经有的东西出发，比如地形、常年风向、现有的步行路径。我们会先把场地看清楚再画。",
    "home.thread_2_title": "用一套小工具",
    "home.thread_2_body":
      "Sketchup 和 Grasshopper 工作室用得最多，Rhino 画细节，Ladybug 在前期估算日照和能耗。一般是先把设计想好，再用这些工具画出来。",
    "home.thread_3_title": "面向街道",
    "home.thread_3_body":
      "公共建筑对着街道，要让人一眼看懂。外面做得简单，复杂的部分放在里面。",
    "home.featured_eyebrow": "首件 · {year}",
    "home.featured_cta": "进入",

    "projects.title": "作品",
    "projects.eyebrow": "{count} 件作品",
    "projects.h1": "作品",
    "projects.lede":
      "工作室时期的方案按年序排列。每件附短引与设计意图。",
    "projects.read": "进入",

    "case.eyebrow": "作品 · {year}",
    "lightbox.close": "关闭",
    "lightbox.prev": "上一张",
    "lightbox.next": "下一张",
    "case.lede_zh_label": "原文",
    "case.meta_year": "年份",
    "case.meta_date": "日期",
    "case.meta_location": "坐标",
    "case.meta_typology": "类型",
    "case.meta_status": "状态",
    "case.back": "← 全部作品",
    "case.prev": "上一件",
    "case.next": "下一件",
    "case.body_note": "正文为中文。",

    "research.title": "研究",
    "research.eyebrow": "研究",
    "research.h1": ["工具是", "器具", "，不是设计本身。"],
    "research.lede":
      "计算工具的价值在于让工作室能更诚实、更高效地探索更多可能。Sketchup 与 Grasshopper 两条长期研究合集于此。",
    "research.read": "阅读研究",
    "research.back": "← 全部研究",
    "research.note":
      "那些看起来惊艳但很少在实战方案中用到的工具，没有专属页面。工作室更看重一套小而精的工具。",
    "research.case_eyebrow": "研究",
    "research.attribution": "DoraWolf 工作室",
    "research.prev": "上一篇",
    "research.next": "下一篇",
    "research.body_note": "正文为中文。",
    "research.note_label": "工作室手记",

    "about.title": "关于",
    "about.eyebrow": "关于",
    "about.h1_role": "建筑师",
    "about.h1_after": "。",
    "about.h2_bio": "关于工作室",
    "about.h2_studio": "DoraWolf 工作室",
    "about.h2_practice": "工作室",
    "about.h2_record": "作品在册",
    "about.h2_tools": "日常工具",
    "about.kv_based": "坐标",
    "about.kv_languages": "语言",
    "about.kv_email": "邮箱",

    "timeline.title": "起点",
    "timeline.eyebrow": "起点",
    "timeline.h1": ["工作室之前", "与之后。"],
    "timeline.lede":
      "两段时期串起目前这条线索：中信武汉分院的院所年(2021-2023)与之后独立工作室的实践。",

    "footer.contact": "联系",
    "footer.studio": "工作室",
    "footer.links": "链接",
    "footer.source": "源代码 · GitHub",
    "footer.rights": "© {year} {studioName}. 保留所有权利。",
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
    "nav.home_aria": "{name} home",
    "nav.lang_switch_aria": "Switch language",

    "home.eyebrow": "{range}",
    "home.hero": [
      "We focus on",
      "site",
      "climate",
      "and the people who use the building.",
    ],
    "home.lede":
      "DoraWolf Studio is based in {location} and works on education, infrastructure, and public buildings. Every project starts from the terrain, climate, and surroundings of the site. We draw in Sketchup, Grasshopper, Rhino, and Ladybug.",
    "home.cta_view_projects": "View projects",
    "home.cta_about": "About the studio",
    "home.section_index_eyebrow": "Works",
    "home.section_index_title": "Selected works",
    "home.section_all_link": "All {count} works",
    "home.section_threads_eyebrow": "Studio",
    "home.section_threads_title": "Three threads",
    "home.thread_1_title": "Start from the site",
    "home.thread_1_body":
      "The form starts from what is already on the site. That includes terrain, prevailing wind, and paths people already walk. We look at the site carefully before drawing.",
    "home.thread_2_title": "Use a small kit",
    "home.thread_2_body":
      "Sketchup and Grasshopper are what we use most. Rhino is for detail, Ladybug for early daylight and energy estimates. We work out the design first and then pick up the tools.",
    "home.thread_3_title": "Toward the street",
    "home.thread_3_body":
      "A public building should look simple from the street. We keep the outside simple and put the more complicated parts inside.",
    "home.featured_eyebrow": "Featured · {year}",
    "home.featured_cta": "Open",

    "projects.title": "Works",
    "projects.eyebrow": "{count} works",
    "projects.h1": "Works.",
    "projects.lede":
      "Studio-years schemes arranged chronologically. Each carries a short brief and the design intent that drove it.",
    "projects.read": "Open",

    "case.eyebrow": "Work · {year}",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous",
    "lightbox.next": "Next",
    "case.lede_zh_label": "Original text",
    "case.meta_year": "Year",
    "case.meta_date": "Date",
    "case.meta_location": "Location",
    "case.meta_typology": "Typology",
    "case.meta_status": "Status",
    "case.back": "← All works",
    "case.prev": "Previous",
    "case.next": "Next",
    "case.body_note":
      "Visual case study. The full prose version is on the Chinese site.",

    "research.title": "Research",
    "research.eyebrow": "Research",
    "research.h1": ["Tools as", "instruments", ", not the design."],
    "research.lede":
      "Computational tools earn their place when they let the studio test more alternatives, more honestly, in less time. Two long studies, Sketchup and Grasshopper, are collected here as ongoing logs.",
    "research.read": "Read study",
    "research.back": "← All research",
    "research.note":
      "Tools that look impressive but are rarely used in real schemes don't earn a page. The studio prefers a small kit, used well.",
    "research.case_eyebrow": "Research",
    "research.attribution": "DoraWolf Studio",
    "research.prev": "Previous",
    "research.next": "Next",
    "research.body_note":
      "Visual study. The full prose version is on the Chinese site.",
    "research.note_label": "Studio note",

    "about.title": "About",
    "about.eyebrow": "About",
    "about.h1_role": "architect",
    "about.h1_after": ".",
    "about.h2_bio": "About the studio",
    "about.h2_studio": "DoraWolf Studio",
    "about.h2_practice": "Studio",
    "about.h2_record": "Works on record",
    "about.h2_tools": "Daily kit",
    "about.kv_based": "Based in",
    "about.kv_languages": "Languages",
    "about.kv_email": "Email",

    "timeline.title": "Timeline",
    "timeline.eyebrow": "Timeline",
    "timeline.h1": ["Before the studio,", "and since."],
    "timeline.lede":
      "Two periods carry the current thread: the institute years at CITIC Architectural Design & Research Institute, Wuhan studio (2021-2023), and the independent practice that followed.",

    "footer.contact": "Contact",
    "footer.studio": "Studio",
    "footer.links": "Links",
    "footer.source": "Source · GitHub",
    "footer.rights": "© {year} {studioName}. All rights reserved.",
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
