import fs, { promises } from 'fs';
import { exec } from 'child_process';

export async function copyStaticAssets() {
  try {
    if (fs.existsSync('src/assets')) {
      await promises.mkdir('dist/assets', { recursive: true });
      await promises.cp('src/assets', 'dist/assets', { recursive: true });
      console.log('Static assets copied successfully');
    }
    if (fs.existsSync('package.json')) {
      await promises.cp('package.json', 'dist/package.json');
      console.log('Package.json copied successfully');
    }
  } catch (e) {
    console.error('Error copying static assets:', e);
    throw e;
  }
}

export const runBuildTypes = () => {
  exec('npm run build:types', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing command: ${err}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
    }
    console.log(`Command output: ${stdout}`);
  });
};
