define([], function () {
  function Collision() {
  }

  Collision.prototype.advance = function (entities, delta) {
    var i, j, collisions = [];

    function difference(a, b) {
      return a.position.map(function (v, i) {
        return v - b.position[i];
      });
    }

    function distance(a, b) {
      return Math.sqrt(difference(a, b).reduce(function (a, b) {
        return a + b * b;
      }, 0));
    }

    function touch(a, b) {
       return distance(a, b) < (a.radius + b.radius);
    }

    function collide(a, b) {
      var scale = a.radius + b.radius,
        overlap = distance(a, b) - scale,
        ratio = overlap / scale,
        delta = difference(a, b);
      a.position = a.position.map(function (v, i) {
        return v - delta[i] * ratio;
      });
      b.position = b.position.map(function (v, i) {
        return v + delta[i] * ratio;
      });
    }

    for (i = 0; i < entities.length; i += 1) {
      for (j = i + 1; j < entities.length; j += 1) {
        if (touch(entities[i], entities[j])) {
          collisions.push([entities[i], entities[j]]);
        }
      }
    }

    collisions.forEach(function (collision) {
      collide(collision[0], collision[1]);
    });
  };

  return Collision;
});