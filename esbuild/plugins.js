import { runBuildTypes } from './utils.js';
import { promises } from 'fs';
import { LIB_DIR, EXTRA_LIB_MODULES } from './constants.js';

/**
 * @type {import('./buildTypes').Plugin}
 */
export const buildTypesOnBuildEnd = {
  name: 'build-types-on-build-end',
  setup(build) {
    let buildCount = 0;
    const buildFile = build.initialOptions.entryPoints[0];

    build.onStart((args) => {
      buildCount++;
    });
    build.onEnd((result) => {
      if (result.errors.length === 0) {
        if (buildCount === 1 && buildFile === 'src/index.ts') {
          console.log(
            'Genereting types on first build after src/index.ts is bundled',
          );
          runBuildTypes();
        } else if (buildCount > 1) {
          console.log(
            `Genereting types after rebuild number ${buildCount - 1}`,
          );
          runBuildTypes();
        }
      } else {
        console.error('Build failed:', result.errors);
      }
    });
  },
};

/**
 * @type {import('./buildTypes').Plugin}
 */
export const importAllIndicesFiles = {
  name: 'import-all-indices-files',
  setup(build) {
    build.onLoad({ filter: /.(ts|tsx)$/ }, async (args) => {
      const modules = EXTRA_LIB_MODULES.concat(LIB_DIR).map((module) => ({
        path: `src/${module}/index.ts`,
        name: module,
      }));
      const filesContent = modules.map(async ({ path, name }) => {
        const fileContent = await promises.readFile(path, {
          encoding: 'utf-8',
        });
        const newContent = fileContent.replaceAll('./', `./${name}/`);

        return newContent;
      });

      const allContent = (await Promise.all(filesContent)).reduce(
        (acc, content) => acc.concat(content),
        '',
      );
      await promises.writeFile(args.path, allContent);
      return {
        contents: allContent,
        loader: 'ts',
        resolveDir: 'src',
      };
    });
  },
};
