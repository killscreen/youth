define([
  'text!./ontologies/world.json',
  'text!./ontologies/bear.json',
  '../game/ontology/Fact',
  '../game/ontology/Ontology'
], function (world, bear, Fact, Ontology) {
  function ontology(facts) {
    return new Ontology(facts.map(function (fact) {
      return new Fact(fact);
    }));
  }

  function Ontologies() {
    this.global = ontology(JSON.parse(world));
    this.ontologies = {};
    this.set('bear', JSON.parse(bear));
  }

  Ontologies.prototype.world = function () {
    return this.global;
  };

  Ontologies.prototype.get = function (what) {
    return this.ontologies[what];
  };

  Ontologies.prototype.set = function (what, facts) {
    this.ontologies[what] = ontology(facts);
  };

  return Ontologies;
});
