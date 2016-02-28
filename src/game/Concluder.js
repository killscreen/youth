define([], function () {
  function Concluder(self, mappings, ontology) {
    this.self = self;
    this.mappings = mappings;
    this.ontology = ontology;
  }

  Concluder.prototype.touch = function (entity) {
    Object.keys(this.mappings).forEach(function (key) {
      if (this.ontology.is(entity.what, key) > 0) {
        this.mappings[key]();
      }
    }.bind(this));
  }

  Concluder.prototype.collide = function (a, b) {
    if (a.what === this.self) {
      this.touch(b);
    } else if (b.what === this.self) {
      this.touch(a);
    }
  };

  return Concluder;
});
