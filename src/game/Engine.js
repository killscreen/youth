define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Intelligence',
  './physics/Wall',
  './physics/Friction',
  './physics/Verlet',
  './Concluder',
  './ontology/Fact'
], function (Momentum, Collision, Intelligence, Wall, Friction, Verlet, Concluder, Fact) {

  function Engine(state, ontologies) {
    var verlet = new Verlet(),
      finished = false,
      finish = function (topic) {
        if (!finished) {
          topic.notify();
          finished = true;
        }
      },
      concluder = new Concluder('you', {
        bad: finish.bind(this, state.failure()),
        good: finish.bind(this, state.victory())
      }, ontologies.world()),
      colliders = [ concluder.collide.bind(concluder) ];

    this.scene = state.scene();
    this.subsystems = [
      verlet,
      new Intelligence(ontologies),
      new Momentum(),
      new Collision(colliders),
      new Friction(0.1),
      new Wall(32)
    ];

    state.facts().observe(ontologies.set.bind(ontologies, 'you'));

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
