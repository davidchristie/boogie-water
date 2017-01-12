module.exports = {
  create,
  update
}

let river

function create (game) {
  preload(game)
  river = game.add.tileSprite(0, 0, 800, 600, 'water')
}

function update (game) {
  river.tilePosition.y -= 0.5 //probably won't need
}

function preload (game) {
  game.load.image('water', 'assets/water.jpeg')
  game.load.start()
}
