// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import nurodevbun from '@nurodev/astro-bun';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'middleware'
  }),
});