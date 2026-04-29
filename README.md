# DoraWolf Portfolio

Personal portfolio site for DoraWolf — architect and designer.

## Stack

- [Astro 5](https://astro.build/) — static site generator
- TypeScript content collections
- Sharp image pipeline (WebP / AVIF / responsive)
- Deployed to GitHub Pages on push to `main`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys to GitHub Pages.

Live URL: https://crabsatellite.github.io/dorawolf_portfolio/

## Branches

- `main` — current Astro source
- `wp-archive` — original WordPress export (preserved for reference, not built)

## License

Content (text, images, project work) © DoraWolf.
Site code under MIT.
