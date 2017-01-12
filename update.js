const kayak = require('./kayak')
const background = require ('./background')
const boulders = require ('./boulders')

module.export = (game) => {
  kayak.update(game)
  background.update(game)
  boulders.update(game)
}
