import { chromium } from "playwright";
import fs from "node:fs/promises";

const BASE = "http://localhost:4322/dorawolf_portfolio";
const PAGES = [
  "/projects/jiangxia-star/",
  "/projects/hanjiang-bay-foreign-language-school/",
  "/projects/cybersecurity-center-phase-ii/",
  "/projects/optics-valley-exhibition-center/",
  "/projects/qingling-lakeside-high-school/",
  "/projects/yangtze-foreign-language-school/",
  "/projects/metro-control-center/",
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const page = await ctx.newPage();
await fs.mkdir("./_design/diag", { recursive: true });

for (const p of PAGES) {
  await page.goto(BASE + p, { waitUntil: "networkidle", timeout: 30000 });
  // measure
  const info = await page.evaluate(() => {
    const article = document.querySelector("article.case");
    const hero = document.querySelector(".case__hero");
    const head = document.querySelector(".case__head");
    const body = document.querySelector(".case__body");
    const nav = document.querySelector(".case__nav");
    const html = document.documentElement;
    return {
      bodyHeight: document.body.getBoundingClientRect().height,
      docHeight: html.scrollHeight,
      articleRect: article?.getBoundingClientRect().toJSON(),
      heroRect: hero?.getBoundingClientRect().toJSON(),
      headRect: head?.getBoundingClientRect().toJSON(),
      bodyRect: body?.getBoundingClientRect().toJSON(),
      navRect: nav?.getBoundingClientRect().toJSON(),
      lastChildOfBody: (() => {
        const last = document.body.lastElementChild;
        return {
          tag: last?.tagName,
          rect: last?.getBoundingClientRect().toJSON(),
        };
      })(),
    };
  });
  const slug = p.replace(/\//g, "_");
  console.log(`\n=== ${p} ===`);
  console.log(`  doc height: ${Math.round(info.docHeight)}`);
  console.log(`  article bottom: ${Math.round(info.articleRect.bottom)}`);
  console.log(`  nav bottom: ${Math.round(info.navRect.bottom)}`);
  console.log(`  body height: ${Math.round(info.bodyHeight)}`);
  console.log(`  gap below nav: ${Math.round(info.bodyHeight - info.navRect.bottom)}`);
  console.log(`  last child: ${info.lastChildOfBody.tag} bottom=${Math.round(info.lastChildOfBody.rect.bottom)}`);

  // screenshot bottom region
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: `./_design/diag/${slug.replace(/^_+/, "")}-bottom.png`,
    fullPage: false,
  });
}

await browser.close();
console.log("\nDone");
