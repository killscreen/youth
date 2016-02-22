define([
  './ui/MainView',
  './ui/Region',
  './game/Game',
  './game/Engine'
], function (MainView, Region, Game, Engine) {
  function Youth(window) {
    this.window = window;
    this.body = new Region(window.document.body);
  }

  Youth.prototype.run = function () {
    var game = new Game(),
      view = new MainView(game),
      previous = Date.now(),
      engine = new Engine(game);

    this.window.setInterval(function () {
      var now = Date.now(),
        delta = (now - previous) / 1000.0;
      previous = now;
      engine.advance(delta);
    }, 100);

    this.body.show(view);
  };

  return Youth;
});
