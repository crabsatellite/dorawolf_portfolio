/**
 * Screenshot the live site at multiple viewports for design review.
 * Scrolls through each page to trigger lazy images before snapping.
 */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://crabsatellite.github.io/dorawolf_portfolio";
const OUT = path.resolve("./_design/shots");

const PAGES = [
  { name: "home", url: `${BASE}/` },
  { name: "projects-index", url: `${BASE}/projects/` },
  { name: "project-yangtze-foreign-language-school", url: `${BASE}/projects/yangtze-foreign-language-school/` },
  { name: "project-jiangxia-star", url: `${BASE}/projects/jiangxia-star/` },
  { name: "project-hanjiang-bay-foreign-language-school", url: `${BASE}/projects/hanjiang-bay-foreign-language-school/` },
  { name: "project-metro-control-center", url: `${BASE}/projects/metro-control-center/` },
  { name: "research-index", url: `${BASE}/research/` },
  { name: "research-sketchup", url: `${BASE}/research/sketchup/` },
  { name: "research-grasshopper", url: `${BASE}/research/grasshopper/` },
  { name: "about", url: `${BASE}/about/` },
];

const VIEWPORTS = [
  { label: "desktop", width: 1440, height: 900 },
  { label: "mobile", width: 390, height: 844 },
];

async function scrollAll(page) {
  // Force-scroll the entire page in steps so IntersectionObserver fires
  // and every <img loading="lazy"> gets requested.
  await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight;
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < total + step; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 200));
    }
    // Wait for all images
    const imgs = Array.from(document.querySelectorAll("img"));
    await Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalHeight > 0
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
              setTimeout(res, 4000);
            })
      )
    );
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 400));
  });
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();

    for (const p of PAGES) {
      console.log(`  ${vp.label}/${p.name}`);
      try {
        await page.goto(p.url, { waitUntil: "networkidle", timeout: 45000 });
      } catch {
        await page.goto(p.url, { waitUntil: "domcontentloaded", timeout: 45000 });
      }
      await page.waitForTimeout(700);
      await scrollAll(page);
      await page.waitForTimeout(400);
      const top = path.join(OUT, `${p.name}-${vp.label}-top.png`);
      await page.screenshot({ path: top, fullPage: false });
      const full = path.join(OUT, `${p.name}-${vp.label}-full.png`);
      await page.screenshot({ path: full, fullPage: true });
    }

    await ctx.close();
  }

  await browser.close();
  console.log(`Done. Shots in ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
