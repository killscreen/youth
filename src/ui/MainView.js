define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  './SceneView',
  './ToggleView',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, SceneView, ToggleView, $, _) {
  function MainView(state) {
    StaticView.call(this, mainHtml);
    this.toggle = new ToggleView('Pause', 'Play', state.status(), 'running');
    this.facts = new FactsView(state.facts());
    this.scene = new SceneView(state.scene());
    this.observe(_.bind(function (elements) {
      this.panes = [
        new Region($(elements.filter('div')[0])),
        new Region($(elements.filter('div')[1])),
        new Region($(elements.filter('div')[2]))
      ];
      this.panes[0].show(this.toggle);
      this.panes[1].show(this.scene);
      this.panes[2].show(this.facts);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  return MainView;
});
