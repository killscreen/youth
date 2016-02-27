define(['../Mutable'], function (Mutable) {
  function Game() {
    var self = this,
      state = {
        scene: [
          {
            position: [ 3, 1 ],
            radius: 1,
            velocity: [ 0, 2 ],
            what: 'you'
          },
          {
            position: [ 5, 6 ],
            radius: 1.5,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 5.5, 1 ],
            radius: 1.25,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 9 ],
            radius: 0.75,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 0 ],
            radius: 0.5,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 5 ],
            radius: 0.25,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 4 ],
            radius: 0.5,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 7, 3 ],
            radius: 0.5,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 6, 10 ],
            radius: 2,
            velocity: [ 0, 0 ],
            what: 'goal'
          }
        ].map(function (entity) {
          entity.position = entity.position.map(function (v) {
            return Math.max(v, entity.radius);
          });
          return entity;
        }),
        facts: [
          {
            subject: 'fire',
            object: 'bad',
            modifiers: []
          }
        ],
        state: {
          running: false
        }
      };
    Mutable.call(this, state);
  }

  Game.prototype = Object.create(Mutable.prototype);

  return Game;
});
