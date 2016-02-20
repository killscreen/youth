define(['./main.html', './View'], function (mainHtml) {
  function MainView() {
    View(mainHtml);
  }

  MainView.prototype = Object.create(View.prototype);

  return MainUI;
});
