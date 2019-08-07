#!/usr/bin/env node

import chalk from 'chalk';
import program from 'commander';

/**
 * This is this script main file calling the core functions and features
 *
 * --
 *
 * Possible error codes:
 */

((): void => {
  program
    .version('0.0.1')
    .description('Check and setup access to private NPM registry or package')
    .option(
      '-r',
      '--registry <registryUrl>',
      'Private registry, to override package.json publishConfig'
    )
    .option('-p', '--package <packageName>', 'Private package, used to test access to the registry')
    .parse(process.argv);

  console.log(chalk.red('test'));
})();
