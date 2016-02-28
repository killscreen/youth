define([
  'text!./ontologies/world.json',
  '../game/ontology/Fact',
  '../game/ontology/Ontology'
], function (world, Fact, Ontology) {
  function Ontologies() {
    function ontology(json) {
      return new Ontology(JSON.parse(json).map(function (fact) {
        return new Fact(fact);
      }));
    }

    this.ontologies = {
      world: ontology(world)
    };
  }

  Ontologies.prototype.world = function () {
    return this.ontologies.world;
  };

  return Ontologies;
});
