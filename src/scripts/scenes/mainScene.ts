import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  private background: any;
  private player: any;
  private cursorKeys: any;
  private spacebar: any;
  private enemies: any;
  private scoreLabel: any;
  private score;
  private scoreFormated: any;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    //this.background = this.add.tileSprite(0, 0, this.config.width, this.config.width, "background");
    //this.background = this.add.tileSprite(0, 0, 400, 400, "background");
    this.background.setOrigin(0,0);
    
    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow"
    });

  }

  update() {
  }


}
