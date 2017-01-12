window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

const start = require('./create')
const run = require('./update')

<<<<<<< HEAD
const game = new Phaser.Game(1500, 950, Phaser.AUTO, 'game', {preload:preload, create: create, update: update});

function preload() {
  game.load.spritesheet('kayaker', 'assets/kayaker.png', 64, 64)
}
=======
const game = new Phaser.Game(1500, 950, Phaser.AUTO, 'game', {create: create, update: update});
>>>>>>> 23f0355d769f0a18ede4754e707ef52d401ea293

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  start(game)
}

function update() {
  run(game)
}
