define(['lodash', 'zepto', '../Observable'], function (_, $, Observable) {
  function View(template) {
    this.render = _.template(template);
    this.update({});

    Observable(_.bind(function (notify) {
      this.notify = notify;
      notify(this.$elements);
    }, this);
  }

  View.prototype = Object.create(Observable.prototype);

  View.prototype.update = function (model) {
    var $elements = this.$elements = this.render(model);
    this.notify($elements);
  };

  return View;
});
