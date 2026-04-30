/**
 * Generate brand assets from the source logo set in _tmp_logo/logo/.
 *
 *   logo.png         500x372  building mark only
 *   wlogo1000.png    1000x733 full lockup (mark + DORAWOLF + studio)
 *   word.png         800x145  wordmark only
 *
 * Outputs land in public/brand/ (organised assets) plus the four
 * canonical favicon files at public/ root that the browser picks up
 * automatically.
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";

const SRC = "./_tmp_logo/logo";
const PUBLIC = "./public";
const BRAND = path.join(PUBLIC, "brand");

await fs.mkdir(BRAND, { recursive: true });

const BG = { r: 246, g: 245, b: 239, alpha: 1 }; // matches --bg #f6f5ef

// Square the mark (500x372) onto a centered transparent canvas, then
// shrink-wrap with breathing room so it reads at small sizes.
async function squareMark(pad = 0.18) {
  const src = path.join(SRC, "logo.png");
  const meta = await sharp(src).metadata();
  const side = Math.max(meta.width, meta.height);
  const inset = Math.round(side * pad);
  const canvas = side + inset * 2;
  return sharp({
    create: {
      width: canvas,
      height: canvas,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: src, gravity: "center" }])
    .png()
    .toBuffer();
}

// Same but with the cream site background (for favicons that need a
// solid backdrop on dark OS chrome).
async function squareMarkOnCream(pad = 0.16) {
  const src = path.join(SRC, "logo.png");
  const meta = await sharp(src).metadata();
  const side = Math.max(meta.width, meta.height);
  const inset = Math.round(side * pad);
  const canvas = side + inset * 2;
  return sharp({
    create: {
      width: canvas,
      height: canvas,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: src, gravity: "center" }])
    .png()
    .toBuffer();
}

const markBuf = await squareMark();
const markCreamBuf = await squareMarkOnCream();

// ---- Favicon set ---------------------------------------------------
async function writeResize(buf, size, out) {
  await sharp(buf)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`  ${out} (${size}x${size})`);
}

console.log("Favicons (transparent):");
await writeResize(markBuf, 16, path.join(PUBLIC, "favicon-16.png"));
await writeResize(markBuf, 32, path.join(PUBLIC, "favicon-32.png"));
await writeResize(markBuf, 48, path.join(PUBLIC, "favicon-48.png"));

// ICO (multi-size 16/32/48)
console.log("ICO:");
const icoBuf = await pngToIco([
  await fs.readFile(path.join(PUBLIC, "favicon-16.png")),
  await fs.readFile(path.join(PUBLIC, "favicon-32.png")),
  await fs.readFile(path.join(PUBLIC, "favicon-48.png")),
]);
await fs.writeFile(path.join(PUBLIC, "favicon.ico"), icoBuf);
console.log("  public/favicon.ico (16+32+48 bundle)");

// Apple touch icon (180×180, on cream so it doesn't disappear on a
// black home-screen background).
console.log("Apple touch icon:");
await writeResize(markCreamBuf, 180, path.join(PUBLIC, "apple-touch-icon.png"));

// PWA icons (Android home / install).
console.log("PWA icons:");
await writeResize(markBuf, 192, path.join(PUBLIC, "icon-192.png"));
await writeResize(markBuf, 512, path.join(PUBLIC, "icon-512.png"));

// ---- Site-internal brand assets -----------------------------------
console.log("Brand assets:");

// Mark on transparent — for any inline use.
await sharp(markBuf)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(BRAND, "mark-512.png"));
console.log("  public/brand/mark-512.png");

await sharp(markBuf)
  .resize(1024, 1024, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(BRAND, "mark-1024.png"));
console.log("  public/brand/mark-1024.png");

// Wordmark only (800×145).
await fs.copyFile(path.join(SRC, "word.png"), path.join(BRAND, "wordmark.png"));
console.log("  public/brand/wordmark.png");

// Full lockup (1000×733) — preserve original.
await fs.copyFile(path.join(SRC, "wlogo1000.png"), path.join(BRAND, "lockup.png"));
console.log("  public/brand/lockup.png");

// OG / social image (1200×630) with cream backdrop and the lockup centered.
const lockupMeta = await sharp(path.join(SRC, "wlogo1000.png")).metadata();
const ogW = 1200;
const ogH = 630;
const lockupTarget = Math.min(ogW * 0.5, ogH * 0.7);
const lockupResized = await sharp(path.join(SRC, "wlogo1000.png"))
  .resize({
    width: Math.round(lockupTarget),
    height: Math.round(lockupTarget * (lockupMeta.height / lockupMeta.width)),
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toBuffer();
await sharp({
  create: {
    width: ogW,
    height: ogH,
    channels: 3,
    background: BG,
  },
})
  .composite([{ input: lockupResized, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(BRAND, "og.png"));
console.log("  public/brand/og.png (1200x630)");

console.log("\nDone.");
