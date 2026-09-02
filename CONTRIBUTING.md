# Contributing to Midnight Signals

Midnight Signals is a community-maintained archive of monthly technical updates
for developers building on Midnight. Everything is plain Markdown in this repo,
and every change goes through a pull request.

There are two kinds of contribution:

| Type | Where | Who |
| --- | --- | --- |
| **News item** — a single signal (release, protocol change, integration) | `src/content/news/` | anyone |
| **Monthly edition** — the long-form issue | `src/content/editions/` | maintainers (PRs welcome) |

---

## 1. Add a news item

### Option A — straight from GitHub (no clone)

1. Go to **`src/content/news/`** → **Add file** → **Create new file**.
2. Name it `YYYY-MM-DD-short-slug.md` (e.g. `2026-08-28-node-2-1-0-ledger-9.md`).
3. Paste the template below and fill it in.
4. **Commit** to a new branch and **open a pull request**.

### Option B — locally

```bash
git clone https://github.com/apestchanker/midnight-signals
cd midnight-signals
npm install
cp src/content/news/_TEMPLATE.md src/content/news/2026-09-01-my-signal.md
# edit the file
npm run dev        # preview at the printed URL
git checkout -b news/my-signal
git commit -am "news: my signal"
git push origin news/my-signal
```

### News item template

```markdown
---
title: "Short, factual headline"
date: 2026-09-01
source: "https://link-to-the-primary-source"
category: "protocol"   # protocol | tooling | ecosystem | governance | research | other
summary: "One or two sentences a developer can skim in the feed."
submittedBy: "your-github-handle"   # optional, for credit
---

A short paragraph (2–5 sentences) with the technical substance: what changed,
which versions or components are affected, and why a builder should care.
```

### Frontmatter reference

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Factual, no hype. |
| `date` | yes | Announcement / release date, `YYYY-MM-DD`. |
| `source` | yes | Canonical link (release notes, official docs/post). Must be a valid URL. |
| `category` | yes | `protocol` \| `tooling` \| `ecosystem` \| `governance` \| `research` \| `other` |
| `summary` | yes | One or two skimmable sentences. |
| `submittedBy` | no | Your GitHub handle, without the `@`. |
| `draft` | no | `true` hides it from the build. |

Files whose name starts with `_` (like `_TEMPLATE.md`) are ignored by the build.

### What gets merged

- **Substantive** and relevant to people building on Midnight.
- **Sourced** — every claim traceable to a primary/official link. Claims about
  Compact syntax, SDK APIs or protocol behavior should be verifiable against
  official docs or release notes.
- **Neutral** in tone. This is a developer changelog, not marketing copy.

---

## 2. Publish a monthly edition (maintainers)

1. Create `src/content/editions/YYYY-MM-signals-N.md`
   (e.g. `2026-09-signals-1.md`).
2. Frontmatter:

   ```markdown
   ---
   title: "Midnight Technical Signals — September #1"
   edition: "September 2026 · #1"
   date: 2026-09-01
   cover: "covers/2026-09.png"   # file in /public/covers
   summary: >-
     2–4 sentence overview used in cards and meta description.
   tags: ["protocol", "ledger-9", "compact"]
   ---
   ```

3. Body is standard Markdown. Use `##` for each numbered development.
4. Add the cover image to `public/covers/` (PNG/JPG/SVG, ~1200×630). Reference it
   from `cover:` relative to `public/` (no leading slash). Use official Midnight
   key art — do not recreate brand marks.
5. Open a PR. Merging to `main` triggers the deploy workflow.

### Release checklist

- [ ] Edition file added with valid frontmatter
- [ ] Cover image in `public/covers/`
- [ ] The month's merged news items are reflected in the edition
- [ ] `npm run check && npm run build` passes
- [ ] Links resolve

---

## Local development

```bash
npm install
npm run dev        # dev server
npm run check      # astro check (types + content schema)
npm run build      # production build to dist/
npm run preview    # serve the built site
```

Node 22+ required.

## Project layout

```
src/
  content/
    editions/      # monthly issues (Markdown)
    news/          # community news items (Markdown, one per file)
  components/       # Astro components
  layouts/          # Base layout
  pages/            # routes (index, editions/, news/, contribute, rss.xml, 404)
  lib/              # site config + base-path helper
public/
  covers/          # edition cover images
```

## Code of Conduct

By participating you agree to uphold the [Code of Conduct](CODE_OF_CONDUCT.md).
