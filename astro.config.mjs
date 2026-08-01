// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writeFileSync } from 'node:fs';
import { redirects } from './src/data/redirects.ts';

/**
 * Static builds can only express a redirect as a meta-refresh page, which search
 * engines honour but treat as weaker than a real 301. So we also emit host-level
 * rules from the same map — whichever the host understands wins, and the meta
 * refresh is the floor if neither is wired up.
 */
function redirectRules() {
  return {
    name: 'redirect-rules',
    hooks: {
      /** @param {{ dir: URL }} ctx */
      'astro:build:done': ({ dir }) => {
        const pairs = Object.entries(redirects);

        const netlify = pairs.map(([from, to]) => `${from}  ${to}  301`).join('\n');
        writeFileSync(new URL('_redirects', dir), `${netlify}\n`);

        const htaccess = [
          '# Redirects from the WordPress site. Generated from src/data/redirects.ts.',
          '# Apache/LiteSpeed hosts: merge into the .htaccess at the document root.',
          '<IfModule mod_rewrite.c>',
          '  RewriteEngine On',
          ...pairs.map(
            ([from, to]) => `  RewriteRule ^${from.replace(/^\//, '')}/?$ ${to} [R=301,L]`
          ),
          '</IfModule>',
        ].join('\n');
        writeFileSync(new URL('redirects.htaccess', dir), `${htaccess}\n`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://breathing-for-heroes.de',
  integrations: [sitemap(), redirectRules()],
  redirects,
  build: { inlineStylesheets: 'auto' },
});
