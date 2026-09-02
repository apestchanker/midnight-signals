import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

/**
 * `editions` — the long-form monthly "Signals" issues.
 * One Markdown file per issue in `src/content/editions/`.
 */
const editions = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/editions' }),
  schema: z.object({
    /** Human title, e.g. "Midnight Technical Signals — September #1" */
    title: z.string(),
    /** Short edition label used in listings, e.g. "September 2026 · #1" */
    edition: z.string(),
    /** Publication date (ISO string in frontmatter). */
    date: z.coerce.date(),
    /** One or two sentences shown in cards and meta description. */
    summary: z.string(),
    /** Path (relative to /public) of the cover image, e.g. "covers/2026-09.png" */
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * `news` — community-submitted signals. One Markdown file per item in
 * `src/content/news/`. Contributors open a PR adding a file here (see
 * CONTRIBUTING.md). Maintainers curate these into the monthly editions.
 */
const news = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Canonical link to the announcement / release / docs. */
    source: z.string().url(),
    category: z.enum([
      'protocol',
      'tooling',
      'ecosystem',
      'governance',
      'research',
      'other',
    ]),
    summary: z.string(),
    /** GitHub handle of the contributor, without the @. */
    submittedBy: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { editions, news };
