
class PlayerDrawer {
  constructor() {
    this.playerAssets = new PlayerAssets();
  }

  drawPlayer(player, context) {
    const asset = this.playerAssets.getAsset(player.state, player.animation);
    context.save();
    context.drawImage(
      asset.tile,
      asset.frameX,
      asset.frameY,
      asset.width,
      asset.height || asset.width,
      player.xPos,
      player.yPos,
      player.width,
      player.height
    );
    context.restore();
  }

  drawPlayerHealth(player, drawRect, context) {
    const precentHealth = player.hp / player.totalHealth
    const healthBar = {
      attributes: {
        color: 'red',
      },
      xPos: 25,
      yPos: 560,
      width: 250*precentHealth,
      height: 25,
    };
    drawRect(healthBar);
  }
}