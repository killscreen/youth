define(['../Mutable'], function (Mutable) {
  function Status() {
    Mutable.call(this, {
      running: false
    });
  }
  Status.prototype = Object.create(Mutable.prototype);
  return Status;
});
