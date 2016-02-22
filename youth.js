require.config({
  paths: {
    "lodash": "bower_components/lodash/dist/lodash.min",
    "text": "bower_components/text/text",
    "zepto": "bower_components/zepto/zepto.min"
  },
  shim: {
    "zepto": {
      exports: "$"
    }
  }  
})

define(['./src/Youth'], function (Youth) {
  var youth = new Youth(window);

  youth.run();

  return youth;
});
