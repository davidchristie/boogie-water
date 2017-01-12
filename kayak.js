module.exports = {
  create,
  update
}

let player
let cursors
let flip

function create (game) {
  // game.load.spritesheet('kayaker', 'assets/kayaker.png', 64, 64)
  // game.load.start()


  //add player
  player = game.add.sprite(450, 50, 'kayaker')


  player.scale.setTo(2, 2)
  player.anchor.set(0.5)
  player.body.setSize(60, 50)


  //add camera
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1)

  //add gravity
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 100
  game.physics.enable(player, Phaser.Physics.ARCADE)

  //  add keyboard inputs
  cursors = game.input.keyboard.createCursorKeys()
  flip = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

  //sets player animations
  player.animations.add('idle', [0, 1, 2, 3], 5, true)
  player.animations.add('walk', [16, 17, 18, 19, 20], 10, true)
}

function update (game) {
//
}
