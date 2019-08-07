import chalk from 'chalk';

export const printError = (error: Error, exitCode?: number): void => {
  console.log(chalk.bold.red('⚠️ Error'));
  console.log(error);

  // early-termination if no exit code provided
  if (exitCode === undefined) return;

  // ending the whole script with exitCode if provided
  process.exit(exitCode);
};
