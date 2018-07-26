export default class StorageWithPrefix {
  constructor(prefix) {
    this._prefix = prefix;
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.keyWithPrefix = this.keyWithPrefix.bind(this);
  }

  getItem(key) {
    return localStorage.getItem(this.keyWithPrefix(key));
  }

  setItem(key, value) {
    return localStorage.setItem(this.keyWithPrefix(key), value);
  }

  removeItem(key) {
    return localStorage.removeItem(this.keyWithPrefix(key));
  }

  keyWithPrefix(key) {
    return this._prefix + ':' + key;
  }
}
