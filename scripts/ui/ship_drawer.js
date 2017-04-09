
class ShipDrawer {
  constructor () {
    this.shipAssets = new ShipAssets();
  }

  drawShip(ship, context) {
    context.drawImage(
      this.shipAssets.getAsset(ship.attributes.name),
      ship.xPos,
      ship.yPos,
      ship.width,
      ship.height
    );
  }

  drawShips(ships, context) {
    _.forEach(ships, (ship) => {
      if (ship.attributes.visible) {
        this.drawShip(ship, context);
      }
    });
  }
}