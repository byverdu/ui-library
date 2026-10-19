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
        '@lib': resolve(__dirname, './src/lib'),
        '@utils': resolve(__dirname, './src/utils'),
        '@types': resolve(__dirname, './src/types'),
        '@hooks': resolve(__dirname, './src/hooks'),
      },
    },
  };
});
