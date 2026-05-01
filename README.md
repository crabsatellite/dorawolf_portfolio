# DoraWolf — Static Archive (v1, 2026-05-01)

Frozen snapshot of the DoraWolf portfolio site at the moment it
launched on `dorawolf.com` (Cloudflare-fronted GitHub Pages),
2026-05-01.

This branch (`archive-html-v1-2026-05-01`) carries **only the built
HTML/CSS/JS/AVIF/WebP output** — no source, no `node_modules`, no
build pipeline. Open `index.html` in a browser to view offline; or
`gh pages` could serve it directly without any toolchain.

For the full source (Astro + content + scripts), see branch
[`main`](../../tree/main) or the immutable tag
[`v1-2026-05-01-launch`](../../releases/tag/v1-2026-05-01-launch).

## Stack at the time of this snapshot

- Astro 5.4 (content collections, rehype plugins for Picture/AVIF)
- Latin body: Fraunces Variable (serif, Undercase Type)
- CJK body: LXGW WenKai Screen GB (kaiti, OFL)
- Display headings: Source Serif 4 + Noto Serif SC
- Mono: JetBrains Mono
- Hosting: GitHub Pages serving artifact root, Cloudflare proxy
  (orange cloud) for SSL + CDN edge, custom domain `dorawolf.com`
  (registered at Aliyun, NS pointed at `hassan.ns.cloudflare.com`
  + `shaz.ns.cloudflare.com`)

## License

All project visuals (renders / drawings / photos under
`projects/*/`) © Qingyuan Fu (DoraWolf Studio). All rights reserved.
Code archived alongside is MIT.
