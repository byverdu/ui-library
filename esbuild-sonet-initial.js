import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import svgr from 'esbuild-plugin-svgr';
import { glob } from 'glob';
import path from 'path';
import fs, { promises } from 'fs';

// Common esbuild configuration
const commonConfig = {
  sourcemap: true,
  format: 'esm',
  target: ['ES2020'],
  platform: 'neutral',
  jsx: 'automatic',
  minify: true,
  loader: {
    '.svg': 'file',
  },
  plugins: [
    nodeExternalsPlugin(),
    svgr({
      exportType: 'default',
      typescript: true,
      svgrOptions: {
        typescript: true,
        icon: true,
      },
    }),
  ],
  bundle: true,
  treeShaking: true,
};

async function buildLibrary() {
  // First, build all individual component files
  // This preserves the original file structure
  await esbuild.build({
    ...commonConfig,
    entryPoints: glob.sync('src/**/*.{ts,tsx}', {
      absolute: true,
      ignore: ['src/vite-env.d.ts', 'src/**/index.ts', 'src/index.ts'],
    }),
    outdir: 'dist',
    outbase: 'src',
  });

  // // Now build the index files separately
  // // Main index
  await esbuild.build({
    ...commonConfig,
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    external: [
      // Also treat our own lib as external in the index file
      './lib/*',
      './hooks/*',
      './theme/*',
      './*',
    ],
  });

  // Components index
  if (fs.existsSync('src/lib/index.ts')) {
    await esbuild.build({
      ...commonConfig,
      entryPoints: ['src/lib/index.ts'],
      outfile: 'dist/lib/index.js',
      external: [
        // Also treat our own lib as external in the index file
        '../lib/*',
        './*/index',
        './*',
      ],
    });
  }

  // Build other module indices
  const moduleTypes = ['hooks', 'theme'];
  for (const moduleType of moduleTypes) {
    const indexFile = `src/${moduleType}/index.ts`;
    if (fs.existsSync(indexFile)) {
      await esbuild.build({
        ...commonConfig,
        entryPoints: [indexFile],
        outfile: `dist/${moduleType}/index.js`,
        external: [
          // Also treat our own modules as external in the index file
          `./${moduleType}/*`,
          './*/index',
          './*',
        ],
      });
    }
  }

  // Build component indices
  const componentDirs = glob.sync('src/lib/*/', { absolute: false });
  for (const dir of componentDirs) {
    const componentName = path.basename(dir);
    const indexFile = path.join(dir, 'index.ts');

    if (fs.existsSync(indexFile)) {
      await esbuild.build({
        ...commonConfig,
        entryPoints: [indexFile],
        outfile: `dist/lib/${componentName}/index.js`,
        external: [
          // Also treat our own component files as external
          `./${componentName}`,
        ],
      });
    }
  }
}

// Copy static assets
async function copyStaticAssets() {
  try {
    if (fs.existsSync('src/assets')) {
      await promises.mkdir('dist/assets', { recursive: true });
      await promises.cp('src/assets', 'dist/assets', { recursive: true });
      console.log('Static assets copied successfully');
    }
  } catch (e) {
    console.error('Error copying static assets:', e);
    throw e;
  }
}

// Run the build process
async function build() {
  try {
    await buildLibrary();
    await copyStaticAssets();
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
