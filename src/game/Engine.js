define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Player',
  './physics/Wall',
  './physics/Friction',
  './physics/Verlet',
  './Notifier',
  './ontology/Fact'
], function (Momentum, Collision, Player, Wall, Friction, Verlet, Notifier, Fact) {

  function Engine(state) {
    var player = new Player(),
      verlet = new Verlet(),
      finished = false,
      victory = new Notifier('you', 'door', function () {
        if (!finished) {
          state.victory().notify();
          finished = true;
        }
      }),
      failure = new Notifier('you', 'fire', function () {
        if (!finished) {
          state.failure().notify();
          finished = true;
        }
      }),
      colliders = [ victory, failure ].map(function (notifier) {
        return notifier.collide.bind(notifier);
      });


    this.scene = state.scene();
    this.subsystems = [
      verlet,
      player,
      new Momentum(),
      new Collision(colliders),
      new Friction(0.1),
      new Wall(32)
    ];

    state.facts().observe(function (facts) {
      player.facts(facts.map(function (fact) {
        return new Fact(fact);
      }));
    }.bind(this));

    state.status().observe(function (status) {
      this.running = status.running;
    }.bind(this));

    state.reset().listen(function () {
      verlet.reset();
      finished = false;
    });
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
