define([
  './ui/MainView',
  './ui/Region',
  './game/Game'
], function (MainView, Region, Game) {
  function Youth(window) {
    this.window = window;
    this.body = new Region(window.document.body);
  }

  Youth.prototype.run = function () {
    var game = new Game(),
      view = new MainView();

    this.body.show(view);

    this.unobserve = game.observe(function (state) {
      view.update(state);
    });
  };

  return Youth;
});
