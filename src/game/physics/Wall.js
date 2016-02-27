define([], function () {
  function Wall(size) {
    this.size = size;
  }

  Wall.prototype.advance = function (entities) {
    entities.forEach(function (entity) {
      entity.position = entity.position.map(function (value) {
        return Math.min(Math.max(value, 0), this.size);
      }.bind(this));
    }.bind(this));
  };

  return Wall;
});
