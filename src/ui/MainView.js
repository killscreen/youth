define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  './SceneView',
  './ToggleView',
  './ButtonView',
  './LevelView',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, SceneView, ToggleView, ButtonView, LevelView, $, _) {
  function MainView(state) {
    var toggle = new ToggleView('Pause', 'Play', state.status(), 'running'),
      reset = new ButtonView(state.reset().notify.bind(state.reset()), "Reset"),
      facts = new FactsView(state.facts()),
      scene = new SceneView(state.scene()),
      level = new LevelView(state.victory(), state.failure(), state.reset(), state.status());

    StaticView.call(this, mainHtml);

    this.observe(_.bind(function (elements) {
      [toggle, reset, level, facts, scene].forEach(function (view, index) {
        new Region($(elements.filter('div')[index])).show(view);
      });
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  return MainView;
});
