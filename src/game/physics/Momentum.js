define([], function () {
  function Momentum() {
  }

  Momentum.prototype.advance = function (entities, delta) {
    entities.forEach(function (entity) {
      entity.position = entity.position.map(function (value, index) {
        return value + entity.velocity[index] * delta;
      });
    });
  }

  return Momentum;
});
