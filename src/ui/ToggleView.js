define(['zepto', '../Observable'], function ($, Observable) {
  function ToggleView(on, off, mutable, property) {
    this.$elements = $('<button>');
    mutable.observe(function (state) {
      this.$elements.text(state[property] ? on : off);
    }.bind(this));
    this.$elements.click(function () {
      mutable.mutate(function (state) {
        state[property] = !state[property];
      });
    }.bind(this));
    Observable.call(this, function (notify) {
      notify(this.$elements);
    }.bind(this));
  }

  ToggleView.prototype = Object.create(Observable.prototype);

  return ToggleView;
});
