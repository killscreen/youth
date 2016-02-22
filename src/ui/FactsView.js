define([
  'text!./fact.html',
  './TemplatedView',
  '../Observable',
  './Region',
  'zepto',
  'lodash'
], function (factHtml, TemplatedView, Observable, Region, $, _) {
  function FactsView(facts) {
    this.$ul = $('<ul>');
    this.region = new Region(this.$ul[0]);
    this.template = _.template(factHtml);
    Observable.call(this, _.bind(function (notify) {
      notify(this.$ul);
    }, this));
    facts.observe(_.bind(function (facts) {
      this.$ul.empty();
      this.$ul.append($(facts.map(_.bind(function (fact) {
        return this.template(fact);
      }, this)).join('')));
    }));
  }

  FactsView.prototype = Object.create(Observable.prototype);

  return FactsView;
});
