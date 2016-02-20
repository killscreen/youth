define(['lodash'], function (_) {
  function View(template) {
    this.render = _.template(template); 
  }

  return View;
});
