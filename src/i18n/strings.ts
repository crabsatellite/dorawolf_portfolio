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
    "home.hero": ["建筑应该聆听它的", "场地", "气候", "以及居于其中的人"],
    "home.lede":
      "{fullName} 在湖北工业大学完成建筑学训练,经中信建筑设计研究总院四年方案与竞赛实战,于 2023 年在武汉创立 DoraWolf 工作室。作品聚焦教育建筑、基础设施与公共建筑的交叉地带,以一套小而精的计算工具——Sketchup、Grasshopper、Rhino、Ladybug——推进至落地。",
    "home.cta_view_projects": "查看项目",
    "home.cta_about": "关于",
    "home.section_index_eyebrow": "索引",
    "home.section_index_title": "精选作品",
    "home.section_all_link": "全部 {count} 个项目",
    "home.section_threads_eyebrow": "实践",
    "home.section_threads_title": "三条线索",
    "home.thread_1_title": "以场地为起点",
    "home.thread_1_body":
      "每一个方案都从读取现有地形、气候与城市边界开始。形态从场地已经存在的事物中生发——等高线、主导风向、人们已习惯穿越的路径。",
    "home.thread_2_title": "计算工具",
    "home.thread_2_body":
      "Sketchup 与 Grasshopper 是工作室日常工作的核心,Rhino 用于细部几何,Ladybug 用于早期日照与能耗研究。工具是手段,不是设计本身。",
    "home.thread_3_title": "公共可读性",
    "home.thread_3_body":
      "公共建筑应当从街道上传达出冷静、清晰的姿态。可能时,方案最终化为一个安静的整体——城市中可见的一条单一基准线,先于任何内部的复杂性。",
    "home.featured_eyebrow": "精选 · {year}",
    "home.featured_cta": "查看项目",

    "projects.title": "项目",
    "projects.eyebrow": "索引 · {count} 个作品",
    "projects.h1": "精选作品",
    "projects.lede":
      "学校设计、竞赛与工作室时期的项目按时间顺序排列。每条目附简介与设计意图。",
    "projects.read": "查看项目",

    "case.eyebrow": "项目 · {year}",
    "case.lede_zh_label": "项目原文",
    "case.meta_date": "日期",
    "case.meta_location": "位置",
    "case.meta_role": "角色",
    "case.meta_typology": "类型",
    "case.back": "← 全部项目",
    "case.prev": "上一个",
    "case.next": "下一个",
    "case.body_note": "项目正文为中文。",

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
    "about.h2_record": "项目记录",
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
      "Architecture",
      "site",
      "climate",
      "and the people who will inhabit it.",
    ],
    "home.lede":
      "{fullName} trained in architecture at Hubei University of Technology, then spent four years on schematic and competition work at the China Architecture Design & Research Group before founding DoraWolf Studio in {location} in 2023. The practice works at the intersection of education, infrastructure, and public buildings — reading each site before any form is committed, then pushing the design through a small kit of computational tools (Sketchup, Grasshopper, Rhino, Ladybug) until it has the precision to be built.",
    "home.cta_view_projects": "View projects",
    "home.cta_about": "About",
    "home.section_index_eyebrow": "Index",
    "home.section_index_title": "Selected works",
    "home.section_all_link": "All {count} projects",
    "home.section_threads_eyebrow": "Practice",
    "home.section_threads_title": "Three threads",
    "home.thread_1_title": "Site as origin",
    "home.thread_1_body":
      "Each scheme begins by reading the existing topography, climate, and civic edges. Form follows from what the site already offers — the contour, the prevailing wind, the way people already cross the land.",
    "home.thread_2_title": "Computational tools",
    "home.thread_2_body":
      "Sketchup and Grasshopper sit at the centre of the studio's daily workflow, paired with Rhino for detail geometry and Ladybug for early-stage daylight and energy work. Tools are an instrument, not the design.",
    "home.thread_3_title": "Public legibility",
    "home.thread_3_body":
      "Public buildings are owed a calm, legible reading from the street. Where possible, schemes resolve to a single quiet datum visible from the city before any internal complexity reveals itself.",
    "home.featured_eyebrow": "Featured · {year}",
    "home.featured_cta": "Read project",

    "projects.title": "Projects",
    "projects.eyebrow": "Index · {count} works",
    "projects.h1": "Selected works.",
    "projects.lede":
      "School, competition, and studio years arranged in chronological order. Each entry holds a short brief and the design intent that drove the scheme.",
    "projects.read": "Read project",

    "case.eyebrow": "Project · {year}",
    "case.lede_zh_label": "Original text",
    "case.meta_date": "Date",
    "case.meta_location": "Location",
    "case.meta_role": "Role",
    "case.meta_typology": "Typology",
    "case.back": "← All projects",
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
    "about.h2_record": "Selected projects on record",
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
