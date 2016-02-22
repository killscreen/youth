define(['lodash', 'zepto', '../Observable'], function (_, $, Observable) {
  function TemplatedView(template) {
    this.render = _.template(template);
    this.update({});

    Observable.call(this, _.bind(function (notify) {
      this.notify = notify;
      notify(this.$elements);
    }, this);
  }

  TemplatedView.prototype = Object.create(Observable.prototype);

  TemplatedView.prototype.update = function (model) {
    var $elements = this.$elements = this.render(model);
    this.notify($elements);
  };

  return TemplatedView;
});
