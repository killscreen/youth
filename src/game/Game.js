define(['../Mutable'], function (Mutable) {
  function Game() {
    var self = this,
      state = {
        scene: [
          {
            position: [ 3, 0 ],
            radius: 1,
            velocity: [ 0, 1 ],
            what: 'you'
          },
          {
            position: [ 4, 6 ],
            radius: 2,
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
