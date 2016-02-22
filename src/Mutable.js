function(['./Observable', 'lodash'], function (Observable, _) {
  function Mutable(initial) {
    this.state = initial;
    Observable.call(this, _.bind(function (notify) {
      notify(this.state);
      this.notify = notify;
    }, this));
  }

  Mutable.prototype.mutate = function (mutator) {
    mutator(this.state);
    this.notify(this.state);
  };

  return mutable;
});
