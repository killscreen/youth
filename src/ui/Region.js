define(['zepto'], function ($) {
  function Region(element) {
    this.element = element;
  }

  Region.prototype.show = function (view) {
    var $element = $(this.element);
    $element.empty();

    if (this.unobserve) {
      this.unobserve();
      delete this.unobserve;
    }

    if (view) {
      this.unobserve = view.observe(function (elements) {
        $element.append($(elements));
      });
    }
  };

  return Region;
});
