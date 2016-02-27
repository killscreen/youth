define(['../Mutable'], function (Mutable) {
  function Scene() {
    Mutable.call(this, []);
  }
  Scene.prototype = Object.create(Mutable.prototype);
  return Scene;
});
