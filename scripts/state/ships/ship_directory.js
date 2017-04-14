const shipScale = 0.5;

class ShipDirectory {
  constructor() {
    this.ships = this.directory();
  }

  getRandomShip() {
    const rand = _.random(100);
  //  Modify this logic to adjust how frequently different ships appear
    if (rand < 33) {
      return this.ships.lightRunner;
    } else if (rand < 66) {
      return this.ships.scoutShip;
    } else {
      return this.ships.gunShip;
    }
  };

  directory() {
    return {
      lightRunner: {
        name: 'lightRunner',
        height: 95 * shipScale,
        width: 227 * shipScale,
        hp: 20,
        bulletType: 'normal',
        bulletDirection: 225,
        reloadTime: 1,
      },
      scoutShip: {
        name: 'scoutShip',
        height: 69 * shipScale,
        width: 105 * shipScale,
        hp: 20,
        bulletType: 'normal',
        bulletDirection: _.random(200, 300),
        reloadTime: 0.5,
      },
      gunShip: {
        name: 'gunShip',
        height: 157 * shipScale,
        width: 213 * shipScale,
        hp: 40,
        bulletType: 'heavy',
        bulletDirection: 270,
        reloadTime: 1.5,
      }
    }
  }
}