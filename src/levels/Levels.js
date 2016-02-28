define([
  'text!./0.json',
  'text!./1.json'
], function () {
  var levels = Array.prototype.slice.call(arguments, 0);

  function Levels() {
  }

  Levels.prototype.populate = function (scene, index) {
    scene.mutate(function (entities) {
      var parsed = JSON.parse(levels[index]);
      entities.splice(0, entities.length);
      parsed.forEach(function (entity) {
        entities.push(entity);
      });
    });
  };

  Levels.prototype.count = function () {
    return levels.length;
  };

  return Levels;
});
