import { nodeExternalsPlugin } from 'esbuild-node-externals';
import svgr from 'esbuild-plugin-svgr';
import { glob } from 'glob';
import path from 'path';
import {
  OUT_BASE,
  OUT_DIR,
  EXTERNALS_MODULES,
  EXTRA_LIB_MODULES,
  LIB_DIR,
} from './constants.js';

import { importAllIndicesFiles } from './plugins.js';

/**
 * @type {import('./buildTypes').BuildOptions}
 */
const config = {
  format: 'esm',
  target: ['ES2020'],
  platform: 'neutral',
  jsx: 'automatic',
  loader: {
    '.svg': 'file',
  },
  plugins: [nodeExternalsPlugin(), svgr()],
  bundle: true,
};

const entryPoints = (extraPath = '') =>
  `${OUT_BASE}${extraPath}/index.ts`.trim();
const outFile = (extraPath = '') => `${OUT_DIR}${extraPath}/index.js`.trim();

/**
 * @type {import('./buildTypes').BuildOptions}
 */
const buildAllNonIndexFilesConfig = {
  ...config,
  entryPoints: glob.sync('src/**/*.{ts,tsx}', {
    absolute: true,
    ignore: ['src/vite-env.d.ts', 'src/**/index.ts', 'src/index.ts'],
  }),
  outbase: OUT_BASE,
  outdir: OUT_DIR,
};

// To avoid circular dependencies and import everything into the main index file we need to treat our own lib and extra modules as external dependencies
/**
 * @type {import('./buildTypes').BuildOptions}
 */
const buildMainIndexConfig = {
  ...config,
  plugins: [...config.plugins, importAllIndicesFiles],
  entryPoints: [entryPoints()],
  outfile: outFile(),
  external: [
    EXTERNALS_MODULES[0],
    ...EXTRA_LIB_MODULES.concat(LIB_DIR).map((module) => `./${module}/*`),
  ],
};

// To avoid circular dependencies and import everything into the main index file we need to treat our own lib and extra modules as external dependencies
/**
 * @type {import('./buildTypes').BuildOptions}
 */
const buildLibIndexConfig = {
  ...config,
  entryPoints: [entryPoints(`/${LIB_DIR}`)],
  outfile: outFile(`/${LIB_DIR}`),
  external: ['../lib/*', ...EXTERNALS_MODULES],
};

// To avoid circular dependencies and import everything into the main index file we need to treat our own lib and extra modules as external dependencies
/**
 * @type {import('./buildTypes').BuildOptions}
 */
const buildSeparateModuleIndicesConfig = EXTRA_LIB_MODULES.map(
  (moduleType) => ({
    ...config,
    entryPoints: [entryPoints(`/${moduleType}`)],
    outfile: outFile(`/${moduleType}`),
    external: [`./${moduleType}/*`, ...EXTERNALS_MODULES],
  }),
);

// To avoid circular dependencies and import everything into the main index file we need to treat our own lib and extra modules as external dependencies
/**
 * @type {import('./buildTypes').BuildOptions}
 */
const buildComponentsIndicesConfig = glob
  .sync(`src/${LIB_DIR}/*/`, { absolute: false })
  .map((dir) => ({
    ...config,
    entryPoints: [`${dir}/index.ts`],
    outfile: outFile(`/${LIB_DIR}/${path.basename(dir)}`),
    external: [`./${path.basename(dir)}`],
  }));

/**
 * @param {import('./buildTypes').BuildOptions} props
 * @param {"development" | "production"} buildType
 * @returns {import('./buildTypes').BuildOptions}
 */
const mergeBuildProps = (props, buildType) => {
  const isProduction = buildType === 'production';
  const overrides = {
    minify: isProduction,
    treeShaking: isProduction,
    sourcemap: !isProduction,
  };

  return {
    ...overrides,
    ...props,
  };
};

/**
 * @param {Object} props
 * @param {import('./buildTypes').BuildOptions} [props.extraConfig]
 * @param {"development" | "production"} props.env
 * @returns {import('./buildTypes').BuildOptions[]}
 */
export function configBuilder({ extraConfig, env = 'production' } = {}) {
  return [
    buildAllNonIndexFilesConfig,
    buildLibIndexConfig,
    ...buildSeparateModuleIndicesConfig,
    ...buildComponentsIndicesConfig,
    buildMainIndexConfig,
  ].map((config) => {
    const _config = extraConfig ? extraConfig(config) : config;

    return mergeBuildProps(_config, env);
  });
}
