define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  './SceneView',
  './ToggleView',
  '../Submutable',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, SceneView, ToggleView, Submutable, $, _) {
  function MainView(game) {
    var state = new Submutable(game, 'state')
    StaticView.call(this, mainHtml);
    this.toggle = new ToggleView('Pause', 'Play', state, 'running');
    this.facts = new FactsView(new Submutable(game, 'facts'));
    this.scene = new SceneView(new Submutable(game, 'scene'));
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
