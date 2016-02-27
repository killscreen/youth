define([], function () {
  function Wall(size) {
    this.size = size;
  }

  Wall.prototype.advance = function (entities) {
    entities.forEach(function (entity) {
      var radius = entity.radius;
      entity.position = entity.position.map(function (value) {
        return Math.min(Math.max(value, radius), this.size - radius);
      }.bind(this));
    }.bind(this));
  };

  return Wall;
});
