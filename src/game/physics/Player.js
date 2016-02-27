define(['./Mind', '../ontology/Ontology'], function (Mind, Ontology) {
  function Player() {
    this.facts([]);
  }

  Player.prototype.facts = function (facts) {
    this.love = new Mind('you', new Ontology(facts), 'good', 1);
    this.fear = new Mind('you', new Ontology(facts), 'bad', -1);
  };

  Player.prototype.advance = function (entities, delta) {
    this.love.advance(entities, delta);
    this.fear.advance(entities, delta);
  };

  return Player;
});
