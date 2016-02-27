define([], function () {
  function Verlet() {

  }

  Verlet.prototype.advance = function (entities, delta) {
    if (this.prior && delta > 0) {
      this.prior.forEach(function (position, index) {
        var entity = entities[index];
        entity.velocity = entity.position.map(function (v, i) {
          return (v - position[i]) / delta;
        });
      });
    }
    this.prior = entities.map(function (entity) {
      return [entity.position[0], entity.position[1]];
    });
  };

  Verlet.prototype.reset = function () {
    delete this.prior;
  };

  return Verlet;
});
