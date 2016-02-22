define([
  './physics/Momentum'
], function (Momentum) {
  function Engine(game) {
    this.game = game;
    this.subsystems = [
      new Momentum()
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
