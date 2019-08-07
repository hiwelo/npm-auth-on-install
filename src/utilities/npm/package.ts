import { join, resolve } from 'path';
import { NPM_PACKAGE_CONFIG_FILE } from './_constants';
import { PackageJSON } from './_interfaces';
import { returnEmptyWhenUndefined } from '../generic';
import { getFileContent } from '../node';

/**
 * Returns the content of a `package.json` file
 *
 * If no path to a directory is provided, this function returns the content of this
 * script `package.json` file.
 *
 * Note: we are using fs to access this file because of its location outside of
 * TypeScript `rootDir`.
 *
 * @param dirPath Path to the directory to load the package file from
 */
export const getPackageInfo = async (dirPath?: string): Promise<PackageJSON> => {
  const filePath = dirPath || join(__dirname, '../../../', NPM_PACKAGE_CONFIG_FILE);
  const fileContent = await getFileContent(filePath);

  return JSON.parse(returnEmptyWhenUndefined(fileContent));
};

/**
 * Returns the project folder running the current script
 */
const getProjectFolder = async (): Promise<string> => {
  const currentScriptFolder = resolve(__dirname);

  // early-termination with parent folder of node_modules if any
  if (currentScriptFolder.includes('node_modules')) {
    return currentScriptFolder.split('/node_modules')[0];
  }

  return process.cwd();
};

/**
 * Returns the `package.json` content for the project executing this script
 */
export const loadProject = async (): Promise<PackageJSON> => {
  const projectFolder = await getProjectFolder();

  return getPackageInfo(join(projectFolder, NPM_PACKAGE_CONFIG_FILE));
};
