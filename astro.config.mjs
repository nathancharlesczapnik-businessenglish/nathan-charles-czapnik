import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nathancharlesczapnik.github.io',
  integrations: [sitemap()],
  markdown: {
    smartypants: false,
  },
});