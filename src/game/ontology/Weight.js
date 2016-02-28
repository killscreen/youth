define([], function () {
  var WEIGHTS = {
    slightly: 0.1,
    somewhat: 0.5,
    mostly: 0.8,
    not: 0,
    very: 1.5,
    extremely: 3
  };

  function Weight(modifiers) {
    this.modifiers = modifiers;
  }

  Weight.prototype.weight = function () {
    return Math.min(this.modifiers.reduce(function (product, modifier) {
      var w = WEIGHTS[modifier];
      return (w === undefined ? 1 : w) * product;
    }, 1), WEIGHTS.extremely * WEIGHTS.extremely);
  };

  return Weight;
});
