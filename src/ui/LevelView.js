define(['zepto', '../Observable'], function ($, Observable) {
  function LevelView(victory, failure, reset) {
    this.$elements = $('<span>');

    victory.listen(this.text.bind(this, "Victory!"));
    failure.listen(this.text.bind(this, "Failure."));
    reset.listen(this.text.bind(this, ""));

    Observable.call(this, function (notify) {
      notify(this.$elements);
    }.bind(this));
  }

  LevelView.prototype = Object.create(Observable.prototype);

  LevelView.prototype.text = function (text) {
    this.$elements.text(text);
  };

  return LevelView;
});
