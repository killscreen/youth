define([
  'text!./main.html',
  './StaticView',
  './Region',
  'zepto',
  'lodash'
], function (mainHtml, StaticView, Region, $, _) {
  function MainView() {
    StaticView.call(this, mainHtml);
    this.observe(_.bind(function (elements) {
      // this.canvas = $(this.elements()).find('canvas');
      // this.ul = new Region($(this.elements()).find('ul')[0]);
      // this.ul.show(this.ontology);
    }, this));
  }

  MainView.prototype = Object.create(StaticView.prototype);

  MainView.prototype.update = function (model) {
    // this.scene.update(model.scene);
    // this.ontology.update(model.ontology);
  };

  return MainView;
});
