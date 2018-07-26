import StorageWithPrefix from './storage-with-prefix';

const GLOBAL_PREFIX = 'global';
const ENVS_KEY = 'graphiql:envs';
const ENVS_CONFIG_KEY = 'graphiql:config';

export default class EnvStorage {
  constructor(env) {
    this._env = env;
    this.storage = new StorageWithPrefix(env);
  }

  getConfig() {
    return JSON.parse(this.storage.getItem(ENVS_CONFIG_KEY));
  }

  setConfig(config) {
    this.storage.setItem(ENVS_CONFIG_KEY, JSON.stringify(config));
  }

  static addEnv(env) {
    const store = new StorageWithPrefix(GLOBAL_PREFIX);

    const envs = [
      env,
      ...(JSON.parse(store.getItem(ENVS_KEY)) || []).filter(env => env !== env)
    ];

    store.setItem(ENVS_KEY, JSON.stringify(envs));
  }

  static listEnvs() {
    const store = new StorageWithPrefix(GLOBAL_PREFIX);
    return JSON.parse(store.getItem(ENVS_KEY));
  }
}
