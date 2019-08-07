import { NPM_DEFAULT_REGISTRY } from '../_constants';
import { returnEmptyWhenUndefined } from '../../generic';

/**
 * Interface describing PublishConfig
 */
export interface PublishConfig {
  /**
   * Specify possible accessible restrictions for this package
   */
  access?: 'public' | 'restricted';

  /**
   * Specify the URL to the registry hosting the current package
   */
  registry?: string | URL;
}

/**
 * Specify the default values for the PublishConfig interface
 */
const PublishConfigDefaults: PublishConfig = {
  access: 'restricted',
  registry: NPM_DEFAULT_REGISTRY,
};

/**
 * PublishConfig class
 */
export class PublishConfigClass {
  /**
   * Contains the PublishConfig settings
   */
  private configuration: PublishConfig;

  public constructor(customConfig: PublishConfig | string | undefined) {
    if (customConfig === undefined) customConfig = {};
    if (typeof customConfig === 'string') customConfig = { registry: customConfig };

    this.configuration = { ...PublishConfigDefaults, ...customConfig };
  }

  public get registry(): URL {
    // early-termination if already an URL
    if (this.configuration.registry instanceof URL) return this.configuration.registry;

    const registryUrl = returnEmptyWhenUndefined(this.configuration.registry);
    return new URL(registryUrl);
  }

  public set registry(registryUrl: URL) {
    // early-termination if already an URL
    if (registryUrl instanceof URL) {
      this.configuration.registry = registryUrl;
      return;
    }

    this.configuration.registry = new URL(registryUrl);
  }
}
