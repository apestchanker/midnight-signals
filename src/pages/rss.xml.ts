import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const editions = (await getCollection('editions', (e) => !e.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: `${SITE.name} — Editions`,
    description: SITE.description,
    site: context.site ?? SITE.repo,
    items: editions.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/editions/${entry.id}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
