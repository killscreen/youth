define([
  'zepto',
  '../Observable',
  './Region',
  './ButtonView'
], function ($, Observable, Region, ButtonView) {
  function LevelView(victory, failure, reset, status) {
    this.button = new ButtonView(function () {
      status.mutate(function (status) {
        status.level += 1;
      });
    }, "Next");

    this.$elements = $('<span></span><span></span>');
    this.$label = $(this.$elements[0]);
    this.region = new Region(this.$elements[1]);

    victory.listen(this.text.bind(this, "Victory!", true));
    failure.listen(this.text.bind(this, "Failure.", false));
    reset.listen(this.text.bind(this, "", false));

    Observable.call(this, function (notify) {
      notify(this.$elements);
    }.bind(this));
  }

  LevelView.prototype = Object.create(Observable.prototype);

  LevelView.prototype.text = function (text, show) {
    this.$label.text(text);
    this.region.show(show ? this.button : undefined);
  };

  return LevelView;
});
