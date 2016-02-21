define([], function () {
  function Region(element) {
    this.element = element;
  }

  Region.prototype.show = function (view, model) {
    this.element.innerHTML = view.render(model);
  };

  return Region;
});
