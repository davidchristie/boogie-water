module.exports = {
  create,
  update,
  getKayaker
}

let player
let cursors
let flip

function create (game) {
  //add player
  player = game.add.sprite(750, 50, 'kayaker')

  //add gravity
  // game.physics.arcade.gravity.y = 100
  game.physics.enable(player)

  player.enableBody = true
  player.scale.setTo(3, 2)
  player.anchor.set(0.5)
  player.body.setSize(40, 50)


  //add camera
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1)

  //add keyboard inputs
  cursors = game.input.keyboard.createCursorKeys()
  flip = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

  //sets player animations
  player.animations.add('idle', [0, 1, 2, 3], 5, true)
  player.animations.add('walk', [16, 17, 18, 19, 20], 10, true)
}

function getKayaker() {
  return player
}

function move() {

  player.body.velocity.x = 0
  player.body.velocity.y = 0

  if (cursors.left.isDown)
    {
        player.body.velocity.x -= 200
        player.scale.x = -Math.abs(player.scale.x)
        player.animations.play('walk')
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x += 200
        player.scale.x = Math.abs(player.scale.x)
        player.animations.play('walk')
    }

    if (cursors.up.isDown)
    {
        player.body.velocity.y -= 40
        player.animations.play('idle')
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y += 200
        player.animations.play('idle')
    }

    // if (player.x < 200 || player.x > 1300) {
    //     player.body.velocity.x = 0
    // }

}

function update (game) {
  move()
}
