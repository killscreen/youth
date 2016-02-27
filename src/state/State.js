define(['../Mutable', '../Topic'], function (Mutable, Topic) {
  function State() {
    this.mutables = {
      facts: new Mutable([]),
      scene: new Mutable([]),
      status: new Mutable({ running: false })
    };
    this.topics = {
      reset: new Topic()
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

  return State;
});
