define([], function () {
  function Observable(initializer) {
    var self = this;

    function notify(value) {
      self.last = value;
      self.observers.forEach(function (observer) {
        observer(value);
      });
    }

    this.observers = [];

    initializer(notify);
  }

  Observable.prototype.observe = function (observer) {
    this.observers.push(observer);
    observer(this.last);
    return function unobserve() {
      this.observers = this.observers.filter(function (o) {
        return o !== observer;
      });
    };
  };

  return Observable;
});
