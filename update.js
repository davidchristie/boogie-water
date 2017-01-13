const kayak = require('./kayak')
const background = require ('./background')
const boulders = require ('./boulders')

let hit
let stateText

module.exports = (game) => {
  background.update(game)
  boulders.update(game)
  kayak.update(game)
  if(game.physics.arcade.collide(kayak.getKayaker(), background.getBank())){
    checkHit(game)
  }
  if(game.physics.arcade.collide(kayak.getKayaker(), boulders.getBoulder())){
    checkHit(game)
  }
  if(game.physics.arcade.collide(kayak.getKayaker(), boulders.getOtherBoulder())){
    checkHit(game)
  }

}

function checkHit(game) {
  if (!stateText) {
    stateText = game.add.text(game.world.centerX - 100, game.world.centerY,' ', { font: '84px Arial', fill: '#fff' })
    stateText.text="GAME OVER!\n Click to restart"
    stateText.visible = true
  }
  kayak.kill()
  //the "click to restart" handler
  game.input.onTap.addOnce(restart, this)
  // game.lockRender = true
}

function restart () {
  stateText.visible = false
  stateText = null
  kayak.reset()

  // game.lockRender = false
}
