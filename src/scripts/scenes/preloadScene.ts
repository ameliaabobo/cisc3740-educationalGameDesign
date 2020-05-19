export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    //background
    this.load.image("background", "assets/images/background.png");
    this.load.image("christianityBackground", "assets/images/christianity-background.png");
    this.load.image("islamBackground", "assets/images/islam-background.png");
    this.load.image("judaismBackground", "assets/images/judaism-background.png");

    //book
    this.load.image("christianityBook", "assets/images/christianity-book.png");
    this.load.image("islamBook", "assets/images/islam-book.png");
    this.load.image("judaismBook", "assets/images/judaism-book.png");

    //food
    this.load.image("christianityFood", "assets/images/christianity-food.png");
    this.load.image("islamFood", "assets/images/islam-food.png");
    this.load.image("judaismFood", "assets/images/judaism-food.png");

    //leader
    this.load.image("christianityLeader", "assets/images/christianity-leader.png");
    this.load.image("islamLeader", "assets/images/islam-leader.png");
    this.load.image("judaismLeader", "assets/images/judaism-leader.png");

    //money
    this.load.image("christianityMoney", "assets/images/christianity-money.png");
    this.load.image("islamMoney", "assets/images/islam-money.png");
    this.load.image("judaismMoney", "assets/images/judaism-money.png");

    //place
    this.load.image("christianityPlace", "assets/images/christianity-place.png");
    this.load.image("islamPlace", "assets/images/islam-place.png");
    this.load.image("judaismPlace", "assets/images/judaism-place.png");

    //vehicle
    this.load.image("christianityVehicle", "assets/images/christianity-vehicle.png");
    this.load.image("islamVehicle", "assets/images/islam-vehicle.png");
    this.load.image("judaismVehicle", "assets/images/judaism-vehicle.png");

    //stamp
    this.load.image("christianityStamp", "assets/images/christianity-stamp.png");
    this.load.image("islamStamp", "assets/images/islam-stamp.png");
    this.load.image("judaismStamp", "assets/images/judaism-stamp.png");

    //font
    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

    //player
    this.load.spritesheet("player", "assets/spritesheets/player.png",{
      frameWidth: 75,
      frameHeight: 100
    });

  }

  create() {
    this.add.text(20, 20, "Loading game...");

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNames("player"),
      frameRate: 5,
      repeat: -1
    });

    this.scene.start('MainScene');
  }
}
