define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  './SceneView',
  '../Submutable',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, SceneView, Submutable, $, _) {
  function MainView(game) {
    StaticView.call(this, mainHtml);
    this.facts = new FactsView(new Submutable(game, 'facts'));
    this.scene = new SceneView(new Submutable(game, 'scene'));
    this.observe(_.bind(function (elements) {
      this.panes = [
        new Region($(elements.filter('div')[0])),
        new Region($(elements.filter('div')[1]))
      ];
      this.panes[0].show(this.scene);
      this.panes[1].show(this.facts);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  return MainView;
});
