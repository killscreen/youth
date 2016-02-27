define([
  './physics/Momentum',
  './physics/Collision',
  './physics/Mind',
  './ontology/Fact',
  './ontology/Ontology'
], function (Momentum, Collision, Mind, Fact, Ontology) {
  function Engine(game) {
    this.game = game;
    this.subsystems = [
      new Momentum(),
      new Collision()
    ];
    this.game.observe(function (state) {
      var ontology = new Ontology(state.facts.map(function (fact) {
        return new Fact(fact.subject, fact.object, 1);
      }.bind(this)));
      this.subsystems.push(new Mind('you', ontology, 'bad', -1));
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
