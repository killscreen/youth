define([
  'text!./main.html',
  './StaticView',
  './Region',
  './FactsView',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, FactsView, $, _) {
  function MainView() {
    StaticView.call(this, mainHtml);
    this.facts = new FactsView();
    this.observe(_.bind(function (elements) {
      this.pane = new Region($(elements.filter('div')[0]));
      this.pane.show(this.facts);
      // this.canvas = $(this.elements()).find('canvas');
      // this.ul = new Region($(this.elements()).find('ul')[0]);
      // this.ul.show(this.ontology);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  MainView.prototype.update = function (model) {
    this.facts.update(model.facts);
  };

  return MainView;
});
