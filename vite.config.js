import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Widget',
      fileName: () => `init.js`,
      formats: ['iife'], // for <script src=""> usage
    },
  },
});
