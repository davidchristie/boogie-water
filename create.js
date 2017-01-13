const kayak = require('./kayak')
const background = require ('./background')
const boulders = require ('./boulders')

module.exports = (game) => {
  background.create(game)
  boulders.create(game)
  kayak.create(game)
  const music = game.add.audio('river')
  music.play()
}
