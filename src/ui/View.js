define(['lodash', 'zepto'], function (_, $) {
  function View(template) {
    this.render = _.template(template);
    this.observers = [];
    this.update({});
  }

  View.prototype.observe = function (observer) {
    var self = this;
    this.observers.push(observer);
    return function unobserve() {
      self.observers = self.observers.filter(function (o) {
        return o !== observer;
      });
    };
  }

  View.prototype.update = function (model) {
    var $elements = this.$elements = this.render(model);
    this.observers.forEach(function (observer) {
      observer($elements);
    });
  };

  View.prototype.elements = function () {
    return this.$elements;
  };

  return View;
});
