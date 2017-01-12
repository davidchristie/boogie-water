module.exports = {
  create,
  update
}

let river
let leftBank
let rightBank

function create (game) {
  preload(game)
  river = game.add.tileSprite(0, 0, 1500, 950, 'water')
  river.scale.setTo(3, 3)
  leftBank = game.add.tileSprite(0, 0, 127, 950, 'bank')
  leftBank.scale.setTo(4, 4)
  leftBank.tilePosition.y = 80

  rightBank = game.add.tileSprite(1500, 0, 127, 950, 'bank')
  rightBank.scale.setTo(4, 4)
  rightBank.scale.x = -4 //flips image


}

function update (game) {
  river.tilePosition.y -= 0.3 //makes river flow
}

function preload (game) {
  game.load.image('water', 'assets/water.jpg')
  game.load.image('bank', 'assets/ground.png')
  game.load.start()
}
