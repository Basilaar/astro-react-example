// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://basilaar.github.io', 
  base: '/astro-react-example',

  integrations: [react()],
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});