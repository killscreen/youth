define(['./Observable', 'lodash'], function (Observable, _) {
  function Submutable(mutable, property) {
    Observable.call(this, _.bind(function (notify) {
      this.notify = notify;
    }, this));

    this.property = property;
    this.mutable = mutable;
    this.mutable.observe(_.bind(function (state) {
      var value = state && state[property];
      if (!_.isEqual(value, this.prior)) {
        this.notify(value);
        this.prior = _.cloneDeep(value);
      }
    }, this));
  }

  Submutable.prototype = Object.create(Observable.prototype);

  Submutable.prototype.mutate = function (mutator) {
    mutator(this.prior);
    this.notify(this.prior);
    this.mutable.mutate(_.bind(function (state) {
      state[this.property] = _.cloneDeep(this.prior);
    }, this));
  };

  return Submutable;
});
