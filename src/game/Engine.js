define([
  './physics/Momentum',
  './physics/Collision'
], function (Momentum, Collision) {
  function Engine(game) {
    this.game = game;
    this.subsystems = [
      new Momentum(),
      new Collision()
    ];
  }

  Engine.prototype.advance = function (delta) {
    var subsystems = this.subsystems;
    this.game.mutate(function (state) {
      subsystems.forEach(function (subsystem) {
        subsystem.advance(state.scene, delta);
      });
    });
  };

  return Engine;
});
