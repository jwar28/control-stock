// vite.config.mjs
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: process.env.NODE_ENV === 'production' ? ['@carbon/charts'] : [],
  },
};

export default config;
