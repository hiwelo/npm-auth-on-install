import { PublishConfig } from './classes/PublishConfig';

/**
 * NPM Package configuration JSON Object, loaded from `package.json` files
 *
 * @link https://docs.npmjs.com/files/package.json
 */
export interface PackageJSON extends JSON {
  readonly name: string;
  readonly version: string;
  readonly publishConfig?: PublishConfig;
}
