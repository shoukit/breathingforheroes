// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://breathing-for-heroes.de',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
