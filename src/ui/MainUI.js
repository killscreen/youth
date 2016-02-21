define(['./Region', './MainView'], function (Region, MainView) {
  function MainUI(document, game) {
    var main = new MainView();
    this.body = new Region(document.body);
    this.main = this.main;
    this.body.show(this.main);

    game.observe(function (state) {
      main.update(state);
    });
  }

  MainUI.prototype.update = function (model) {
    this.body.show(this.mainView, model);
  };

  return MainUI;
});
