
// maybe...
const playerTileWidth = 64;

class PlayerAssets {
  constructor() {
    this.sprites = new Image();
    this.sprites.src = './assets/player/player.png';
  }

  run01() {
    return { tile: this.sprites, frameX: 20, frameY: 175, width: playerTileWidth }
  }
  run02() {
    return { tile: this.sprites, frameX: 105, frameY: 175, width: playerTileWidth }
  }
  run03() {
    return { tile: this.sprites, frameX: 180, frameY: 175, width: playerTileWidth }
  }
  run04() {
    return { tile: this.sprites, frameX: 255, frameY: 175, width: playerTileWidth }
  }

  jump01() {
    return { tile: this.sprites, frameX: 15, frameY: 490, width: playerTileWidth }
  }
  jump02() {
    return { tile: this.sprites, frameX: 75, frameY: 485, width: playerTileWidth }
  }
  jump03() {
    return { tile: this.sprites, frameX: 135, frameY: 468, width: playerTileWidth - 5, height: playerTileWidth + 10 }
  }
  jump04() {
    return { tile: this.sprites, frameX: 182, frameY: 465, width: playerTileWidth - 5, height: playerTileWidth + 10 }
  }
  jump05() {
    return { tile: this.sprites, frameX: 236, frameY: 465, width: playerTileWidth - 6, height: playerTileWidth + 10 }
  }
  jump06() {
    return { tile: this.sprites, frameX: 285, frameY: 472, width: playerTileWidth - 7, height: playerTileWidth + 15 }
  }
  jump07() {
    return { tile: this.sprites, frameX: 335, frameY: 475, width: playerTileWidth - 6, height: playerTileWidth + 10 }
  }
  jump08() {
    return { tile: this.sprites, frameX: 385, frameY: 480, width: playerTileWidth - 6, height: playerTileWidth + 10 }
  }

  getAsset(playerState) {
    switch (playerState) {
      case 'standing':
        return this.standing();
      case 'run01':
        return this.run01();
      case 'run02':
        return this.run02();
      case 'run03':
        return this.run03();
      case 'run04':
        return this.run04();
      case 'jump01':
        return this.jump01();
      case 'jump02':
        return this.jump02();
      case 'jump03':
        return this.jump03();
      case 'jump04':
        return this.jump04();
      case 'jump05':
        return this.jump05();
      case 'jump06':
        return this.jump06();
      case 'jump07':
        return this.jump07();
      case 'jump08':
        return this.jump08();
      default:
        return this.standing();
    }
  }

  standing() {
    return {
      tile: this.sprites,
      frameX: 100,
      frameY: 100,
      width: playerTileWidth,
    }
  }
}