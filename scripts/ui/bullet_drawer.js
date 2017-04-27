
class BulletDrawer {
  constructor() {
    this.bulletAsset = new BulletAssets();
  }

  drawBullet(bullet, context) {
    let asset = this.bulletAsset.playerShot();
    if (bullet.type === 'heavyBullet') {
      asset = this.bulletAsset.heavyShot();
    } else if (bullet.type === 'shotGun') {
      asset = this.bulletAsset.shotGun();
    } else if (bullet.owner !== 'player') {
      asset = this.bulletAsset.shipShot();
    }
    // console.log(bullet.owner);
    context.save();
    context.translate(bullet.xPos, bullet.yPos);
    context.rotate(Utils.degToRad(bullet.direction + 90));
    context.translate(-bullet.xPos, -bullet.yPos);
    context.drawImage(
      asset.tile,
      asset.frameX,
      asset.frameY,
      asset.width,
      asset.height,
      bullet.xPos,
      bullet.yPos,
      bullet.width,
      bullet.height
    );
    context.restore();
  }

  drawBullets(bullets, context) {
    _.forEach(bullets, (bullet) => {
      if (bullet.visible) {
        this.drawBullet(bullet, context);
      }
    });
  }
}