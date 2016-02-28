define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  './SceneView',
  './ToggleView',
  './ButtonView',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, SceneView, ToggleView, ButtonView, $, _) {
  function MainView(state) {
    var toggle = new ToggleView('Pause', 'Play', state.status(), 'running'),
      reset = new ButtonView(state.reset(), "Reset"),
      facts = new FactsView(state.facts()),
      scene = new SceneView(state.scene());

    StaticView.call(this, mainHtml);

    this.observe(_.bind(function (elements) {
      this.panes = [
        new Region($(elements.filter('div')[0])),
        new Region($(elements.filter('div')[1])),
        new Region($(elements.filter('div')[2])),
        new Region($(elements.filter('div')[3]))
      ];
      this.panes[0].show(toggle);
      this.panes[1].show(reset);
      this.panes[2].show(facts);
      this.panes[3].show(scene);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  return MainView;
});
