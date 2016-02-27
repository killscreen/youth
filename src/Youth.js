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
      previous = Date.now(),
      engine = new Engine(state),
      levels = new Levels();

    function reset() {
      levels.populate(state.scene(), 0);
    }

    reset();
    state.reset().listen(reset);
    this.window.setInterval(function () {
      var now = Date.now(),
        delta = (now - previous) / 1000.0;
      previous = now;
      engine.advance(delta);
    }, 100);

    this.body.show(new MainView(state));
  };

  return Youth;
});
