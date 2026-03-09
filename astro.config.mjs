// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomtranny.netlify.app', // Moved to top level
  output: 'static',
  
  devToolbar: {
    enabled: true,
  },

  integrations: [
    react(),
    icon(),
  ],
});