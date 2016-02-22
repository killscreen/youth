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
      view = new MainView(game);

    this.body.show(view);
  };

  return Youth;
});
