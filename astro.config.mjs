// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  output: 'static', // Default; use 'server' or 'hybrid' if needed
  devToolbar: {
    enabled: true
    },

  integrations: [
    react(),
    icon(),
  ],
});
