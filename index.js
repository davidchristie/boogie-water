window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

const start = require('./create')
const run = require('./update')


const game = new Phaser.Game(1500, 950, Phaser.AUTO, 'game', {preload:preload, create: create, update: update});

function preload() {
  game.load.spritesheet('kayaker', 'assets/kayaker.png', 64, 64)
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  start(game)
}

function update() {
  run(game)
}
