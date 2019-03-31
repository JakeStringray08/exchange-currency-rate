class RatesService {
  callbacks = [];
  data = null;

  on(cb) {
    this.callbacks.push(cb);
  }

  off(cb) {
    const idx = this.callbacks.indexOf(cb);
    idx >= -1 && this.callbacks.splice(idx, 1);
  }

  publish(data) {
    this.data = data;
    this.callbacks.forEach(cb => cb(data));
  }

  getResults() {
    return this.data;
  }
}

export default new RatesService();