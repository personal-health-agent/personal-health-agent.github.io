import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site URL and base path are env-driven — never hardcoded to a specific host.
//
//   SITE_URL    canonical URL the site is served from (used for sitemap, OG tags)
//   BASE_PATH   path prefix the site is mounted at (e.g. '/repo-name' or '/')
//
// On GitHub Pages, the deploy workflow auto-detects both via the GitHub Pages
// API and passes them in. Locally, defaults below run at http://localhost:4321/.
const SITE_URL = process.env.SITE_URL || 'http://localhost:4321';
const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    format: 'directory',
  },
});
