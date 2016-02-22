define([
  'text!./fact.html',
  './TemplatedView',
  '../Observable',
  './Region',
  'zepto',
  'lodash'
], function (factHtml, TemplatedView, Observable, Region, $, _) {
  function FactsView() {
    this.$ul = $('<ul>');
    this.region = new Region(this.$ul[0]);
    this.template = _.template(factHtml);
    Observable.call(this, _.bind(function (notify) {
      notify(this.$ul);
    }, this));
  }

  FactsView.prototype = Object.create(Observable.prototype);

  FactsView.prototype.update = function (facts) {
    this.$ul.empty();
    this.$ul.append($(facts.map(_.bind(function (fact) {
      return this.template(fact);
    }, this)).join('')));
  };

  return FactsView;
});
