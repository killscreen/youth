define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Player',
  './physics/Wall',
  './physics/Friction',
  './physics/Verlet',
  './ontology/Fact'
], function (Momentum, Collision, Player, Wall, Friction, Verlet, Fact) {
  function Engine(state) {
    var player = new Player();
    this.scene = state.scene();
    this.subsystems = [
      new Verlet(),
      player,
      new Momentum(),
      new Collision(),
      new Friction(0.1),
      new Wall(32)
    ];

    state.facts().observe(function (facts) {
      player.facts(facts.map(function (fact) {
        return new Fact(fact.subject, fact.object, 1);
      }.bind(this)));
    }.bind(this));

    state.status().observe(function (status) {
      this.running = status.running;
    }.bind(this));
  }

  Engine.prototype.advance = function (delta) {
    var subsystems = this.subsystems;
    if (this.running) {
      this.scene.mutate(function (entities) {
        subsystems.forEach(function (subsystem) {
          subsystem.advance(entities, delta);
        });
      });
    }
  };

  return Engine;
});
