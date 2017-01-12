window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

const start = require('./create')
const run = require('./update')

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {

}

function create() {
  start(game)
}

function update() {
  run(game)
}
