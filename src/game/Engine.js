define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Player',
  './physics/Wall',
  './physics/Friction',
  './physics/Verlet',
  './ontology/Fact'
], function (Momentum, Collision, Player, Wall, Friction, Verlet, Fact) {
  function Engine(game) {
    var player = new Player();
    this.game = game;
    this.subsystems = [
      new Verlet(),
      player,
      new Momentum(),
      new Collision(),
      new Friction(0.1),
      new Wall(12)
    ];

    this.game.observe(function (state) {
      player.facts(state.facts.map(function (fact) {
        return new Fact(fact.subject, fact.object, 1);
      }.bind(this)));

      this.running = state.state.running;
    }.bind(this));
  }

  Engine.prototype.advance = function (delta) {
    var subsystems = this.subsystems;
    if (this.running) {
      this.game.mutate(function (state) {
        subsystems.forEach(function (subsystem) {
          subsystem.advance(state.scene, delta);
        });
      });
    }
  };

  return Engine;
});
