// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a project site:
//   https://<owner>.github.io/<repo>
// If you move to a custom domain, set `site` to it and `base` to '/'.
const SITE = process.env.SITE_URL ?? 'https://apestchanker.github.io';
const BASE = process.env.BASE_PATH ?? '/midnight-signals';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
