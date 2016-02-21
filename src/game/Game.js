define(['../Observable'], function (Observable) {
  function Game() {
    var self = this;
    Observable(function (notify) {
      self.notify = notify;
    });
  }

  Game.prototype = Object.create(Observable.prototype);

  

  return game;
});
