import { context } from 'esbuild';
import { configBuilder } from './esbuild/config.js';
import { copyStaticAssets } from './esbuild/utils.js';
import { buildTypesOnBuildEnd } from './esbuild/plugins.js';

const extraConfig = (config) => {
  const newConfig = { ...config };

  newConfig.plugins = [...newConfig.plugins, buildTypesOnBuildEnd];

  return newConfig;
};

async function watch() {
  const contexts = configBuilder({
    extraConfig,
    env: 'development',
  }).map(context);
  const resolvedContexts = await Promise.all(contexts);

  resolvedContexts.map((ctx) => ctx.watch());
  console.log('Watching...');
}

await copyStaticAssets();

// IMPORTANT: this call MUST NOT have an `await`
watch();

// If the call above had an `await`, Node would return
// immediately and you would NOT have the watcher running.
