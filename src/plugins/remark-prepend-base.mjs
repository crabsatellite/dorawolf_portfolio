/**
 * Tiny remark plugin: prepend the configured site base to image URLs that
 * start with "/" (so absolute-from-root paths in markdown survive a project
 * being served under a sub-path like /dorawolf_portfolio).
 */
function walk(node, fn) {
  fn(node);
  if (node.children) {
    for (const c of node.children) walk(c, fn);
  }
}

export default function remarkPrependBase(base = "") {
  const prefix = base.replace(/\/+$/, "");
  return function transformer(tree) {
    if (!prefix) return;
    walk(tree, (node) => {
      if (
        node.type === "image" &&
        typeof node.url === "string" &&
        node.url.startsWith("/") &&
        !node.url.startsWith("//")
      ) {
        node.url = prefix + node.url;
      }
    });
  };
}
