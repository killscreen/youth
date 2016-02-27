define(['./Facts', './Scene', './Status'], function (Facts, Scene, Status) {
  function State() {
    this.mutables = {
      facts: new Facts(),
      scene: new Scene(),
      status: new Status()
    };
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

  return State;
});
