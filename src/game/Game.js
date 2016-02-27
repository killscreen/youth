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
            position: [ 5.5, 0 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 9 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'fire'
          },
          {
            position: [ 0, 0 ],
            radius: 1,
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
