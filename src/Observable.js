define(['lodash'], function (_) {
  function Observable(initializer) {
    function notify(value) {
      this.last = value;
      (this.observers || []).forEach(function (observer) {
        observer(value);
      });
    }
    initializer(_.bind(notify, this));
  }

  Observable.prototype.observe = function (observer) {
    this.observers = this.observers || [];
    this.observers.push(observer);
    observer(this.last);
    return _.bind(function unobserve() {
      this.observers = this.observers.filter(function (o) {
        return o !== observer;
      });
    }, this);
  };

  Observable.prototype.destroy = function () {
    this.observers = [];
  };

  return Observable;
});
