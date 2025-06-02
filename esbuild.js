import { build } from 'esbuild';
import { configBuilder } from './esbuild/config.js';
import { copyStaticAssets } from './esbuild/utils.js';

async function buildLibrary() {
  const builds = configBuilder().map(build);

  await Promise.all(builds);
}

// Run the build process
async function _build() {
  try {
    await buildLibrary();
    await copyStaticAssets();
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

_build();
