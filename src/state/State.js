define(['../Mutable', '../Topic'], function (Mutable, Topic) {
  function State() {
    this.mutables = {
      facts: new Mutable([]),
      scene: new Mutable([]),
      status: new Mutable({ running: false, level: 0 })
    };
    this.topics = {
      reset: new Topic(),
      failure: new Topic(),
      victory: new Topic()
    };

    this.topics.reset.listen(function () {
      this.mutables.status.mutate(function (status) {
        status.running = false;
      });
    }.bind(this));
  }

  State.prototype.facts = function () {
    return this.mutables.facts;
  };

  State.prototype.scene = function () {
    return this.mutables.scene;
  };

  State.prototype.status = function () {
    return this.mutables.status;
  };

  State.prototype.reset = function () {
    return this.topics.reset;
  };

  State.prototype.failure = function () {
    return this.topics.failure;
  };

  State.prototype.victory = function () {
    return this.topics.victory;
  };

  return State;
});
