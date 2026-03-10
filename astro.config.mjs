import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: netlify(),
});
