define(['../Mutable'], function (Mutable) {
  function Game() {
    var self = this,
      state = {
        scene: [
          {
            position: [ 3, 1 ],
            radius: 1,
            velocity: [ 0, 1 ],
            what: 'you'
          },
          {
            position: [ 5, 6 ],
            radius: 1.5,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 6, 0 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 12 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 0 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'fire'
          }
        ],
        facts: [
          {
            subject: 'fire',
            object: 'bad',
            modifiers: []
          }
        ]
      };
    Mutable.call(this, state);
  }

  Game.prototype = Object.create(Mutable.prototype);

  return Game;
});
