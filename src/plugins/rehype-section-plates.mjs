/**
 * Re-shapes the markdown body into a sequence of "plate" sections — one
 * per <h2> heading. Each plate splits its content into a text column and
 * a media column (everything wrapped by a <picture> goes to media,
 * everything else stays as text). Plates alternate left/right via a
 * class so the rendered page reads as a magazine spread instead of a
 * linear blog post.
 *
 *   <h2>...</h2>
 *   <p>copy</p>
 *   <p><picture>...</picture></p>      →   <section class="plate plate--right">
 *   <p>more copy</p>                          <div class="plate__text">
 *   <h2>next</h2>                                <h2>...</h2>
 *                                                <p>copy</p>
 *                                                <p>more copy</p>
 *                                              </div>
 *                                              <div class="plate__media">
 *                                                <picture>...</picture>
 *                                              </div>
 *                                            </section>
 *
 * Sections without media get a single-column "plate--text-only" layout.
 * Sections without h2 (the lead, before the first heading) become an
 * "intro" plate.
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

export default function rehypeSectionPlates(opts = {}) {
  return function transformer(tree) {
    if (!tree || !Array.isArray(tree.children)) return;

    // Walk only the top-level body children. Markdown rehype trees are
    // typically a single root with siblings.
    const flatten = (root) => {
      // Find the root that holds the actual content. Astro may wrap.
      // We just operate on the root.children list directly.
      return root.children;
    };

    const kids = flatten(tree);

    const newChildren = [];
    let cursor = 0;
    let plateIndex = 0;

    // Skip leading whitespace text nodes
    while (
      cursor < kids.length &&
      kids[cursor].type === "text" &&
      /^\s*$/.test(kids[cursor].value)
    ) {
      newChildren.push(kids[cursor]);
      cursor++;
    }

    // Optional intro: anything before the first <h2> becomes an "intro" plate
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
        newChildren.push({
          type: "element",
          tagName: "section",
          properties: { className: ["plate", "plate--intro"] },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["plate__text"] },
              children: introTrimmed,
            },
          ],
        });
      }
    }

    while (cursor < kids.length) {
      const start = cursor;
      // Each section starts at an h2 (we know it does, otherwise loop ended)
      const sectionNodes = [kids[cursor]];
      cursor++;
      while (cursor < kids.length && !isH2(kids[cursor])) {
        sectionNodes.push(kids[cursor]);
        cursor++;
      }

      // Split into text vs media. h2 always goes to text.
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

      if (mediaNodes.length === 0) {
        // text-only section
        newChildren.push({
          type: "element",
          tagName: "section",
          properties: { className: ["plate", "plate--text-only"] },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["plate__text"] },
              children: textNodes,
            },
          ],
        });
      } else {
        const side = plateIndex % 2 === 0 ? "right" : "left";
        plateIndex++;
        newChildren.push({
          type: "element",
          tagName: "section",
          properties: {
            className: ["plate", `plate--${side}`],
          },
          children: [
            {
              type: "element",
              tagName: "div",
              properties: { className: ["plate__text"] },
              children: textNodes,
            },
            {
              type: "element",
              tagName: "div",
              properties: { className: ["plate__media"] },
              children: mediaNodes,
            },
          ],
        });
      }
    }

    tree.children = newChildren;
  };
}
