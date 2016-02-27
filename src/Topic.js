define([], function () {
  function Topic() {
    this.callbacks = [];
  }

  Topic.prototype.listen = function (callback) {
    this.callbacks.push(callback);
    return function () {
      this.callbacks = this.callbacks.filter(function (c) {
        return c !== callback;
      });
    }.bind(this);
  };

  Topic.prototype.notify = function (message) {
    this.callbacks.forEach(function (callback) {
      callback(message);
    });
  };

  return Topic;
});
