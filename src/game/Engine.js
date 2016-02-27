define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Player',
  './physics/Wall',
  './ontology/Fact'
], function (Momentum, Collision, Player, Wall, Fact) {
  function Engine(game) {
    var player = new Player();
    this.game = game;
    this.subsystems = [
      player,
      new Momentum(),
      new Collision(),
      new Wall(12)
    ];
    this.game.observe(function (state) {
      player.facts(state.facts.map(function (fact) {
        return new Fact(fact.subject, fact.object, 1);
      }.bind(this)));
    }.bind(this));
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
