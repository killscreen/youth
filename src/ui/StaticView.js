define(['zepto', '../Observable'], function ($, Observable) {
  function StaticView(html) {
    var $elements = $(html);
    Observable(function (notify) {
      notify($elements);
    });
  }

  StaticView.prototype = Object.create(Observable.prototype);

  return StaticView;
});
