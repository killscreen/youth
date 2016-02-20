define([], function () {
  function Region(element) {
    this.element = element;
  }

  Region.prototype.show = function (view) {
    this.element.innerHTML = view.render();
  };

  return Region;
});
