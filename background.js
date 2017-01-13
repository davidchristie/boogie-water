module.exports = {
  create,
  update,
  getBank
}

let river
let leftBank
let rightBank
let banks

function create (game) {
  river = game.add.tileSprite(0, 0, 1500, 950, 'water')
  river.scale.setTo(3, 3)

  banks = game.add.group()
  banks.enableBody = true;

  leftBank = game.add.tileSprite(0, 0, 127, 950, 'bank')
  leftBank.scale.setTo(4, 4)
  leftBank.tilePosition.y = 80
  banks.add(leftBank)
  leftBank.body.immovable = true
  leftBank.body.setSize(100, 950)

  rightBank = game.add.tileSprite(1500, 0, 127, 950, 'bank')
  rightBank.scale.setTo(4, 4)
  rightBank.scale.x = -4 //flips image
  banks.add(rightBank)
  rightBank.body.immovable = true
  rightBank.body.setSize(100, 950)

}

function update (game) {
  river.tilePosition.y -= 0.3 //makes river flow
  rightBank.tilePosition.y -= 0.8
  leftBank.tilePosition.y -= 0.8
}

function getBank() {
  return banks
}
