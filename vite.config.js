// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index: resolve(__dirname, '/dist/index.html'),
        contact: resolve(__dirname, '/dist/contact.html'),
        work: resolve(__dirname, '/dist/work.html'),
        about: resolve(__dirname, '/dist/about.html'),
      },
    },
  },
});
