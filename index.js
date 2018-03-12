'use strict';

class EasyInterval {
  constructor(fn, delay) {
    this.delay = delay;
    this.fn = fn;
    this.timer = null;
  }

  async callback() {
    if (this.timer) {
      await this.fn();
      this.start();
    }
  }

  start() {
    this.stop();
    this.timer = setTimeout(this.callback.bind(this), this.delay);
  }

  stop() {
    clearTimeout(this.timer);
    this.timer = null;
  }
}

module.exports = EasyInterval;
