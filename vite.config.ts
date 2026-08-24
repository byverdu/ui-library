import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    plugins: [svgr({ include: '**/*.svg' }), react()],
    root: resolve(__dirname, 'dev'),
    build: {
      outDir: resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        '@constants': resolve(__dirname, './src/constants'),
      },
    },
  };
});
