define([
  './StaticView',
  'text!./scene.html',
  'zepto'
], function (StaticView, sceneHtml, $) {
  var SCALE = 16;

  function SceneView(scene) {
    var canvas, context;

    StaticView.call(this, sceneHtml);

    this.unobserve = this.observe(function (elements) {
      canvas = $(elements).filter('canvas')[0];
      context = canvas.getContext('2d');
    });

    scene.observe(function (entities) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "black";
      context.fillStyle = "black";
      entities.map(function (entity) {
        context.strokeText(
          entity.what,
          entity.position[0] * SCALE,
          entity.position[1] * 16
        );
        context.beginPath();
        context.arc(
          entity.position[0] * SCALE,
          entity.position[1] * SCALE,
          entity.radius * SCALE,
          0,
          Math.PI * 2,
          true
        );
        context.closePath();
        context.stroke();
      });
    });
  }

  SceneView.prototype = Object.create(StaticView.prototype);

  return SceneView;
});
