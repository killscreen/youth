define([], function () {
  function Ontology(facts) {
    this.facts = this.facts;
    this.table = {};
  }

  Ontology.prototype.is = function (subject, object) {
    this.table[subject] = this.table[subject] || {};
    if (!this.table[subject].hasOwnProperty(object)) {
      this.table[subject][object] = this.facts.reduce(function (value, fact) {
        var is = fact.is(subject, object, this);
        return is !== undefined ? is : value;
      }.bind(this), undefined);
    }
    return this.table[subject][object];
  };

  return Ontology;
});
