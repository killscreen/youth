define([], function () {
  function Levels() {

  }

  Levels.prototype.populate = function (scene, index) {
    scene.mutate(function (entities) {
      entities.splice(0, entities.length);

      entities.push({
        what: 'you',
        position: [ 6, 1 ],
        velocity: [ 0, 1 ],
        radius: 1
      });

      entities.push({
        what: 'fire',
        position: [ 6, 6 ],
        velocity: [ 0, 0 ],
        radius: 2
      });
    });
  };

  return Levels;
});
