import { PackageJSON } from './_interfaces';
import { PublishConfigClass } from './classes/PublishConfig';

/**
 * Returns the URL of the registry configured for this package
 *
 * @param packageConfig NPM package configuration
 */
export const getRegistry = (packageConfig: PackageJSON): URL => {
  const publishConfig = new PublishConfigClass(packageConfig.publishConfig);

  return publishConfig.registry;
};
