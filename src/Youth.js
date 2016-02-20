define([], function () {
  function Youth(window) {
    this.window = window;
  }

  Youth.prototype.run = function () {
    this.window.alert("Hello world!");
  };

  return Youth;
});
