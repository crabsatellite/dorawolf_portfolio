#!/usr/bin/env node
/**
 * Convert ASCII punctuation (, : ; ? !) adjacent to a CJK character into
 * the full-width equivalent (， ： ； ？ ！). Periods, dashes, parens
 * and quotes are deliberately left alone — those follow looser house
 * conventions.
 *
 * Usage:
 *   node scripts/fix-cjk-punct.mjs          # apply
 *   node scripts/fix-cjk-punct.mjs --check  # dry run, report only
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const TARGETS = [
  "data",
  "src/content/projects",
  "src/content/projectsEn",
  "src/content/research",
  "src/content/researchEn",
  "src/i18n",
  "src/components",
  "src/layouts",
];

const EXT = new Set([".md", ".json", ".ts", ".astro"]);
const CJK = "\\u4e00-\\u9fff";

const RULES = [
  { re: new RegExp(`([${CJK}]),`,  "g"), rep: "$1，" },
  { re: new RegExp(`,([${CJK}])`,  "g"), rep: "，$1" },
  { re: new RegExp(`([${CJK}]):`,  "g"), rep: "$1：" },
  { re: new RegExp(`:([${CJK}])`,  "g"), rep: "：$1" },
  { re: new RegExp(`([${CJK}]);`,  "g"), rep: "$1；" },
  { re: new RegExp(`;([${CJK}])`,  "g"), rep: "；$1" },
  { re: new RegExp(`([${CJK}])\\?`, "g"), rep: "$1？" },
  { re: new RegExp(`\\?([${CJK}])`, "g"), rep: "？$1" },
  { re: new RegExp(`([${CJK}])!`,  "g"), rep: "$1！" },
  { re: new RegExp(`!([${CJK}])`,  "g"), rep: "！$1" },
];

const check = process.argv.includes("--check");

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (EXT.has(path.extname(e.name))) yield full;
  }
}

let files = 0;
let edits = 0;

for (const sub of TARGETS) {
  const start = path.join(ROOT, sub);
  if (!fs.existsSync(start)) continue;
  for (const file of walk(start)) {
    const orig = fs.readFileSync(file, "utf8");
    let out = orig;
    let n = 0;
    for (const { re, rep } of RULES) {
      out = out.replace(re, (_m, g) => {
        n++;
        return rep.replace("$1", g);
      });
    }
    if (n > 0) {
      files++;
      edits += n;
      const rel = path.relative(ROOT, file).replace(/\\/g, "/");
      console.log(`${rel}: ${n}`);
      if (!check) fs.writeFileSync(file, out, "utf8");
    }
  }
}

console.log(
  `\n${edits} edit(s) across ${files} file(s)${check ? " — dry run" : ""}`
);
