import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

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
