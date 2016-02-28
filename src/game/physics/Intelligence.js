define(['./Mind', 'lodash'], function (Mind, _) {
  function Intelligence(ontologies) {
    this.ontologies = ontologies;
  }

  Intelligence.prototype.advance = function (entities, delta) {
    _.flatten(_.uniq(entities.map(function (entity) {
      return entity.what;
    })).filter(function (what) {
      return !!this.ontologies.get(what);
    }.bind(this)).map(function (what) {
      return [
        new Mind(what, this.ontologies.get(what), 'good', 1),
        new Mind(what, this.ontologies.get(what), 'bad', -1)
      ];
    }.bind(this))).forEach(function (mind) {
      mind.advance(entities, delta);
    });
  };

  return Intelligence;
});
