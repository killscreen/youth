define(['zepto', '../Observable'], function ($, Observable) {
  function ButtonView(callback, text) {
    var $element = $('<button>');
    $element.text(text);
    $element.click(callback);
    Observable.call(this, function (notify) {
      notify($element);
    });
  }

  ButtonView.prototype = Object.create(Observable.prototype);

  return ButtonView;
});
