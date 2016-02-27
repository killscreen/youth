define([
  './ui/MainView',
  './ui/Region',
  './state/State',
  './game/Engine',
  './levels/Levels'
], function (MainView, Region, State, Engine, Levels) {
  function Youth(window) {
    this.window = window;
    this.body = new Region(window.document.body);
  }

  Youth.prototype.run = function () {
    var state = new State(),
      view = new MainView(state),
      previous = Date.now(),
      engine = new Engine(state),
      levels = new Levels();

    levels.populate(state.scene(), 0);

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
