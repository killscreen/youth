define([], function () {
  function Friction(coefficient) {
    this.coefficient = coefficient;
  }

  Friction.prototype.advance = function (entities, delta) {
    entities.forEach(function (entity) {
      entity.velocity = entity.velocity.map(function (value) {
        return value - value * this.coefficient * delta;
      }.bind(this));
    }.bind(this));
  };

  return Friction;
});
