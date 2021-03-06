define([
  'text!./fact.html',
  'text!./facts.html',
  './TemplatedView',
  '../Observable',
  './Region',
  'zepto',
  'lodash'
], function (factHtml, factsHtml, TemplatedView, Observable, Region, $, _) {

  function FactsView(facts) {
    var $elements = $(factsHtml),
      $form = $elements.filter('form'),
      $input = $elements.find('input[type=text]');
    this.$ul = $elements.filter('ul');
    this.region = new Region(this.$ul[0]);
    this.template = _.template(factHtml);

    Observable.call(this, _.bind(function (notify) {
      notify($elements);
    }, this));

    this.facts = facts;
    this.facts.observe(_.bind(function (facts) {
      this.$ul.empty();
      facts.forEach(_.bind(function (fact, index) {
        var $elements = $(this.template(fact)),
          $x = $elements.find('a');
        $x.click(_.bind(function (event) {
          event.preventDefault();
          this.facts.mutate(function (facts) {
            facts.splice(index, 1);
          });
        }, this));
        this.$ul.append($elements);
      }, this));
    }, this));

    $form.submit(_.bind(function (event) {
      var tokens = $input.val().split(" ");
      event.preventDefault();
      facts.mutate(function (facts) {
        facts.push({
          subject: tokens[0],
          modifiers: tokens.slice(1, tokens.length - 1),
          object: tokens[tokens.length - 1]
        });
      });

      return false;
    }, this));
  }

  FactsView.prototype = Object.create(Observable.prototype);

  return FactsView;
});
