import { readFile } from 'fs';
import { promisify } from 'util';
import { FS_ENCODING } from './_constants';
import { printError } from '../generic';

/**
 * Promisify Node File System functions
 */
const readFileContent = promisify(readFile);

/**
 * Returns the content of a specified file as a string
 *
 * @param filePath Specify the file location
 */
export const getFileContent = async (filePath: string): Promise<string | undefined> => {
  try {
    return readFileContent(filePath, FS_ENCODING);
  } catch (error) {
    printError(error, 1);
  }
};
