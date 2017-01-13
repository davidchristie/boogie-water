const kayak = require('./kayak')
const background = require ('./background')
const boulders = require ('./boulders')

let hit

module.exports = (game) => {
  background.update(game)
  // boulders.update(game)
  kayak.update(game)
  hit = game.physics.arcade.collide(kayak.getKayaker(), background.getBank())
  checkHit(game)
}

function checkHit(game) {
  if(hit) {
    let stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' })
    stateText.text="GAME OVER";
    stateText.visible = true;

    //the "click to restart" handler
    // game.input.onTap.addOnce(restart,this);
  }
}
