define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, $, _) {
  function MainView(game) {
    StaticView.call(this, mainHtml);
    this.facts = new FactsView(game.facts());
    this.observe(_.bind(function (elements) {
      this.pane = new Region($(elements.filter('div')[0]));
      this.pane.show(this.facts);
      // this.canvas = $(this.elements()).find('canvas');
      // this.ul = new Region($(this.elements()).find('ul')[0]);
      // this.ul.show(this.ontology);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  return MainView;
});
