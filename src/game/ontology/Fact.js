define([], function () {
  function Fact(subject, object, weight) {
    this.subject = subject;
    this.object = object;
    this.weight = weight;
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
