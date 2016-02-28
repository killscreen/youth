define(['./Weight'], function (Weight) {
  function Fact(definition) {
    this.subject = definition.subject;
    this.object = definition.object;
    this.weight = new Weight(definition.modifiers).weight();
  }

  Fact.prototype.is = function (subject, object, prior) {
    function weigh(value, weight) {
      return value === undefined ? value : (value * weight);
    }
    return this.subject !== subject ? undefined :
      this.object === object ? this.weight :
      weigh(prior.is(this.object, object), this.weight);
  };

  return Fact;
});
