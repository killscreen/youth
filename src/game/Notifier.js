define([], function () {
  function Notifier(a, b, callback) {
    this.a = a;
    this.b = b;
    this.callback = callback;
  }

  Notifier.prototype.collide = function (a, b) {
    function match(aa, bb) {
      return aa === a.what && bb === b.what;
    }

    if (match(this.a, this.b) || match(this.b, this.a)) {
      this.callback();
    }
  }

  return Notifier;
});
