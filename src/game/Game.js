define(['../Mutable'], function (Mutable) {
  function Game() {
    var self = this,
      state = {
        scene: [
          {
            position: [ 0, 0 ],
            radius: 1,
            velocity: [ 1, 1 ],
            what: 'you'
          },
          {
            position: [ 5, 3 ],
            radius: 2,
            velocity: [ 0, 0 ],
            what: 'pig'
          }
        ],
        facts: [
          {
            subject: 'fire',
            object: 'hot',
            modifiers: [ 'very' ]
          },
          {
            subject: 'water',
            object: 'wet',
            modifiers: [ 'very', 'very' ]
          }
        ]
      };
    Mutable.call(this, state);
  }

  Game.prototype = Object.create(Mutable.prototype);

  return Game;
});
