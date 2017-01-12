window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

const start = require('./create')
const run = require('./update')

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {create: create, update: update});

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  start(game)
}

function update() {
  run(game)
}
