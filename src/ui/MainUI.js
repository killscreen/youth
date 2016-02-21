define(['./Region', './MainView'], function (Region, MainView) {
  function MainUI(document) {
    this.body = new Region(document.body);
    this.main = new MainView();
    this.update({});
  }

  MainUI.prototype.update = function (model) {
    this.body.show(this.mainView, model);
  };

  return MainUI;
});
