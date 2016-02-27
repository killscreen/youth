define([], function () {
  function Ontology(facts) {
    this.facts = this.facts;
  }

  Ontology.prototype.is = function (subject, object) {
    return this.facts.reduce(function (value, fact) {
      var is = fact.is(subject, object, this);
      return is !== undefined ? is : value;
    }.bind(this), undefined);
  };

  return Ontology;
});
