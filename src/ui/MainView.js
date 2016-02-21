define([
  'text!./main.html',
  './StaticView',
  './Region',
  '$'
], function (mainHtml, StaticView, Region, $) {
  function MainView() {
    StaticView(mainHtml);
    this.canvas = $(this.elements()).find('canvas');
    this.ul = new Region($(this.elements()).find('ul')[0]);
    this.ontology = new OntologyView();
    this.scene = new SceneView();
    this.ul.show(this.ontology);
  }

  MainView.prototype = Object.create(StaticView.prototype);

  MainView.prototype.update = function (model) {
    this.scene.update(model.scene);
    this.ontology.update(model.ontology);
  };

  return MainView;
});
