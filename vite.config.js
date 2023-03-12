// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dist: resolve(__dirname, '/dist/index.html'),
        dist: resolve(__dirname, '/dist/contact.html'),
        dist: resolve(__dirname, '/dist/work.html'),
        dist: resolve(__dirname, '/dist/about.html'),
      },
    },
  },
});
