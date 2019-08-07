#!/usr/bin/env node
import chalk from 'chalk';
import program from 'commander';
import { getPackageInfo, getRegistry, loadProject } from './utilities';

/**
 * This is this script main file calling the core functions and features
 *
 * This script:
 *
 * 1. loads info about the current project it is executed from
 * 2. identifies the private registry needing authentication
 */

(async (): Promise<void> => {
  const { version: scriptVersion } = await getPackageInfo();

  program
    .version(scriptVersion)
    .description('Check and setup access to private NPM registry or package')
    .option(
      '-r',
      '--registry <registryUrl>',
      'Private registry, to override package.json publishConfig'
    )
    .option('-p', '--package <packageName>', 'Private package, used to test access to the registry')
    .parse(process.argv);

  // loads current project package info
  const currentProject = await loadProject();

  // project's private registry identification
  const registryUrl = getRegistry(currentProject);

  console.log(registryUrl);

  console.log(chalk.red('end'));
})();
