// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sco2.org',
  base: '/sco2.org/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
