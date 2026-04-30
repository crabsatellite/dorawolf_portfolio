#!/usr/bin/env py
"""
For each project markdown file, swap the `hero:` frontmatter line to a
render-type image picked from the project's classification sidecar.
Falls back to site-plan if no renders exist; otherwise leaves the hero
unchanged.
"""
from __future__ import annotations
import json
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parent.parent
PROJECTS = ROOT / "src" / "content" / "projects"
CLASSIFICATIONS = ROOT / "data" / "image-classifications"

PRIORITY = ["render", "site-plan", "axon", "photo", "collage", "diagram", "sketch"]


def pick_hero(slug: str) -> str | None:
    p = CLASSIFICATIONS / f"{slug}.json"
    if not p.exists():
        return None
    data = json.loads(p.read_text(encoding="utf-8"))
    by_type: dict[str, list[str]] = {}
    for path, meta in data.items():
        if not isinstance(meta, dict):
            continue
        t = meta.get("type")
        if not isinstance(t, str):
            continue
        by_type.setdefault(t, []).append(path)
    for t in PRIORITY:
        items = by_type.get(t)
        if items:
            return items[0]
    return None


def main() -> int:
    for md in sorted(PROJECTS.glob("*.md")):
        slug = md.stem
        new_hero = pick_hero(slug)
        if not new_hero:
            print(f"  · {slug}: no classification found")
            continue
        text = md.read_text(encoding="utf-8")
        m = re.search(r'^hero:\s*"([^"]+)"', text, re.M)
        if not m:
            print(f"  · {slug}: no hero line")
            continue
        old_hero = m.group(1)
        if old_hero == new_hero:
            print(f"  · {slug}: hero already best ({old_hero})")
            continue
        new = re.sub(r'^hero:\s*"[^"]+"', f'hero: "{new_hero}"', text, count=1, flags=re.M)
        md.write_text(new, encoding="utf-8")
        print(f"  · {slug}: {old_hero}  →  {new_hero}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
