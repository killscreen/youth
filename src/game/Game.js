define(['../Observable'], function (Observable) {
  function Game() {
    var self = this,
      state = {
        scene: [
          {
            position: [ 0, 0 ],
            radius: 1,
            velocity: [ 0, 0 ],
            what: 'you'
          },
          {
            position: [ 5, 3 ],
            radius: 2,
            velocity: [ 0, 0 ],
            what: 'pig'
          }
        ],
        ontology: [
          {
            subject: 'fire',
            object: 'hot',
            modifiers: [ 'very' ]
          }
        ]
      };
    Observable(function (notify) {
      self.notify = notify;
      notify(state);
    });
  }

  Game.prototype = Object.create(Observable.prototype);

  return game;
});
