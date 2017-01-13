let boulder

module.exports = {
  create,
  update,
  getBoulder,
  getOtherBoulder
}

function create (game) {
  boulder = game.add.sprite(500, 500, 'boulder1')
  boulder.scale.setTo(3, 3)
  boulder.animations.add('rock', [0, 1], 5, true)
  boulder.animations.play('rock')
  game.physics.arcade.enable(boulder)
  boulder.body.velocity.y = -190
  boulder.body.immovable = true
  boulder.body.setSize(40, 20)

  boulder2 = game.add.sprite(800, 1200, 'boulder2')
  boulder2.scale.setTo(3, 3)
  boulder2.animations.add('rock', [0, 1], 5, true)
  boulder2.animations.play('rock')
  game.physics.arcade.enable(boulder2)
  boulder2.body.velocity.y = -190
  boulder2.body.immovable = true
  boulder2.body.setSize(40, 20)
}

function update (game) {
  if(boulder.y <= -200) {
    boulder.x = 400+(Math.random()*600)
    boulder.y = 1000+(Math.random()*500)
  }
  if(boulder2.y <= -200) {
    boulder2.x = 400+(Math.random()*600)
    boulder2.y = 1000+(Math.random()*500)
  }
}

function getBoulder() {
  return boulder
}

function getOtherBoulder() {
  return boulder2
}
