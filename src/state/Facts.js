define(['../Mutable'], function (Mutable) {
  function Facts(facts) {
    Mutable.call(this, facts ? facts.slice(0) : []);
  }
  Facts.prototype = Object.create(Mutable.prototype);
  return Facts;
});
