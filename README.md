# Midnight Signals

**Technical updates for developers building on Midnight** — a community-maintained
archive of the monthly *Midnight Technical Signals* and a running feed of
individual signals contributed via pull request.

🌐 **Live site:** https://apestchanker.github.io/midnight-signals

> Independent and community-maintained. Not an official Midnight Foundation
> publication.

---

## What's here

- **Editions** (`src/content/editions/`) — the long-form monthly issues.
- **News feed** (`src/content/news/`) — one Markdown file per signal, submitted
  by the community and curated into the editions.

Both are plain Markdown with typed frontmatter (see `src/content.config.ts`).

## Contribute

Anyone can propose a signal — no write access needed.

- **Fastest:** open a PR adding a file to `src/content/news/`. See
  [`CONTRIBUTING.md`](CONTRIBUTING.md).
- **No repo:** open a
  [news submission issue](https://github.com/apestchanker/midnight-signals/issues/new?template=news-submission.yml).

Accepted items appear in the feed and feed into the next monthly edition.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run check      # astro check — types + content schema
npm run build      # static build → dist/
npm run preview    # serve the build
```

Requires Node 22+. Built with [Astro](https://astro.build).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to **GitHub Pages**. Pull requests are build-checked by
`.github/workflows/ci.yml`.

One-time setup after creating the repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the *Deploy to GitHub Pages* workflow manually).

The build reads `SITE_URL` / `BASE_PATH` from the Pages configuration, so no
config change is needed for a standard `user.github.io/<repo>` deployment.

### Forking or moving to a custom domain

- Update `repo` in [`src/lib/site.ts`](src/lib/site.ts) and the URLs in
  `.github/ISSUE_TEMPLATE/config.yml`, `public/robots.txt`.
- For a custom domain (served at `/`), set `SITE_URL` to your domain and
  `BASE_PATH` to `/` — either via repo/environment variables or by editing the
  defaults in [`astro.config.mjs`](astro.config.mjs) — and add a
  `public/CNAME` file.

## Cover images

Edition covers live in `public/covers/`. The September cover ships as an SVG
placeholder (`public/covers/2026-09.svg`). To use the real artwork, drop
`public/covers/2026-09.png` in and change `cover:` in
`src/content/editions/2026-09-signals-1.md` to `covers/2026-09.png`.

## License

Code: [MIT](LICENSE). Editorial content (`src/content/`, `public/covers/`):
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See [`LICENSE`](LICENSE).
