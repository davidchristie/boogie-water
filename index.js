window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

const start = require('./create')
const run = require('./update')


const game = new Phaser.Game(1500, 950, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {
  game.load.spritesheet('kayaker', 'assets/kayaker.png', 64, 64)
  game.load.image('water', 'assets/water.jpg')
  game.load.image('bank', 'assets/ground.png')
  game.load.spritesheet('boulder1', 'assets/rock1.png', 64, 64)
  game.load.spritesheet('boulder2', 'assets/rock2.png', 64, 64)
  game.load.audio('river', 'assets/river-1.mp3')

}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  start(game)
}

function update() {
  run(game)
}
