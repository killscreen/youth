define([], function () {
  function Mind(what, ontology, attractor, weight) {
    this.what = what;
    this.ontology = ontology;
    this.attractor = attractor;
    this.weight = weight;
  }

  Mind.prototype.advance = function (entities, delta) {
    var matches = entities.filter(function (entity) {
        return entity.what === this.what;
      }.bind(this));

    function attract(entity) {
      var is = this.ontology.is(entity.what, this.attractor),
        force = is * this.weight;
      if (is === undefined) {
        return;
      }
      matches.forEach(function (match) {
        var difference = match.position.map(function (v, i) {
            return entity.position[i] - v;
          }),
          magnitude = Math.sqrt(difference.reduce(function (sum, v) {
            return sum + v * v;
          }, 0)),
          distance = magnitude - match.radius - entity.radius,
          direction = difference.map(function (v) {
            return magnitude !== 0 ? (v / magnitude) : 0;
          }),
          acceleration = direction.map(function (v) {
            return v * force / (distance + 1);
          });
        match.velocity = match.velocity.map(function (v, i) {
          return v + acceleration[i] * delta;
        });
      }.bind(this));
    }

    entities.filter(function (entity) {
      return entity.what !== this.what;
    }.bind(this)).forEach(attract.bind(this));
  };

  return Mind;
});
