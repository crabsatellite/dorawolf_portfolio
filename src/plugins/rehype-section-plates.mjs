/**
 * Re-shapes a markdown body into "plate" sections — one per <h2> heading.
 *
 * NEW LAYOUT (Phase 11): each plate stacks vertically rather than putting
 * text + media side-by-side. The text becomes a narrow centred column
 * (~60ch) followed by a 12-column media grid that the per-image-type CSS
 * rules size into (renders span 12, diagrams span 6 — pair side-by-side,
 * sketches span 4 — three across, etc.).
 *
 *   <h2>...</h2>
 *   <p>copy</p>
 *   <p><picture/></p>      →   <section class="plate">
 *   <p>copy</p>                  <div class="plate__intro">
 *   <p><picture/></p>              <h2/><p/><p/>
 *   <p><picture/></p>            </div>
 *                                <div class="plate__media-grid">
 *                                  <picture/>  <!-- type→span -->
 *                                  <picture/>
 *                                  <picture/>
 *                                </div>
 *                              </section>
 *
 * Sections without media render only the intro column. Sections with no
 * h2 (loose intro before the first heading) are wrapped in
 * `.plate--intro` with intro-only content.
 */

function isPicture(node) {
  return node && node.type === "element" && node.tagName === "picture";
}

function isImg(node) {
  return node && node.type === "element" && node.tagName === "img";
}

function paragraphIsMedia(p) {
  if (!p || p.type !== "element" || p.tagName !== "p") return false;
  const kids = (p.children || []).filter(
    (c) => !(c.type === "text" && /^\s*$/.test(c.value))
  );
  if (kids.length === 0) return false;
  return kids.every((c) => isPicture(c) || isImg(c));
}

function isH2(n) {
  return n && n.type === "element" && n.tagName === "h2";
}

export default function rehypeSectionPlates(_opts = {}) {
  return function transformer(tree) {
    if (!tree || !Array.isArray(tree.children)) return;

    const kids = tree.children;
    const newChildren = [];
    let cursor = 0;

    // Skip leading whitespace text nodes
    while (
      cursor < kids.length &&
      kids[cursor].type === "text" &&
      /^\s*$/.test(kids[cursor].value)
    ) {
      newChildren.push(kids[cursor]);
      cursor++;
    }

    // Loose intro (anything before the first <h2>)
    if (cursor < kids.length && !isH2(kids[cursor])) {
      const intro = [];
      while (cursor < kids.length && !isH2(kids[cursor])) {
        intro.push(kids[cursor]);
        cursor++;
      }
      const introTrimmed = intro.filter(
        (n) => !(n.type === "text" && /^\s*$/.test(n.value))
      );
      if (introTrimmed.length) {
        newChildren.push(
          plate("plate--intro", {
            text: introTrimmed,
            media: [],
          })
        );
      }
    }

    while (cursor < kids.length) {
      const sectionNodes = [kids[cursor]];
      cursor++;
      while (cursor < kids.length && !isH2(kids[cursor])) {
        sectionNodes.push(kids[cursor]);
        cursor++;
      }

      const textNodes = [];
      const mediaNodes = [];
      for (const n of sectionNodes) {
        if (paragraphIsMedia(n)) {
          for (const c of n.children) {
            if (c.type === "text") continue;
            mediaNodes.push(c);
          }
        } else if (isPicture(n) || isImg(n)) {
          mediaNodes.push(n);
        } else {
          textNodes.push(n);
        }
      }

      const className =
        mediaNodes.length === 0 ? "plate plate--text-only" : "plate";
      newChildren.push(
        plate(className, { text: textNodes, media: mediaNodes })
      );
    }

    tree.children = newChildren;
  };
}

function plate(className, { text, media }) {
  const children = [];
  if (text.length) {
    children.push({
      type: "element",
      tagName: "div",
      properties: { className: ["plate__intro"] },
      children: text,
    });
  }
  if (media.length) {
    children.push({
      type: "element",
      tagName: "div",
      properties: { className: ["plate__media-grid"] },
      children: media,
    });
  }
  return {
    type: "element",
    tagName: "section",
    properties: { className: className.split(/\s+/) },
    children,
  };
}
