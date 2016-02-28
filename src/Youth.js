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
      levels = new Levels(),
      level = -1;

    function reset() {
      levels.populate(state.scene(), level);
    }

    state.status().observe(function (status) {
      if (status.level !== level) {
        level = status.level;
        reset();
      }
    });
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
