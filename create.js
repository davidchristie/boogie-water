const kayak = require('./kayak')
const background = require ('./background')
const boulders = require ('./boulders')

module.exports = (game) => {
  kayak.create(game)
  background.create(game)
  boulders.create(game)
}
