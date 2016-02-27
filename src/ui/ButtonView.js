define(['zepto', '../Observable'], function ($, Observable) {
  function ButtonView(topic, text) {
    var $element = $('<button>');
    $element.text(text);
    $element.click(topic.notify.bind(topic));
    Observable.call(this, function (notify) {
      notify($element);
    });
  }

  ButtonView.prototype = Object.create(Observable.prototype);

  return ButtonView;
});
