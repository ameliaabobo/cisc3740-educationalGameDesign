import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  private background: any;
  private christianityButton: any;
  private islamButton: any;
  private judaismButton: any;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.background = this.add.image(500, 500, "background");
    //this.background.setScale(0.75);
    //this.background.setScale(0.5);
    //this.background.setOrigin(0,0);

    this.christianityButton=this.add.image(200,500,"christianityStamp").setInteractive().on('pointerdown', ()=>this.goToChristianity());
    this.christianityButton.setScale(0.5);

    this.islamButton=this.add.image(500,500,"islamStamp").setInteractive().on('pointerdown', ()=>this.goToIslam());
    this.islamButton.setScale(0.2);

    this.judaismButton=this.add.image(800,500,"judaismStamp").setInteractive().on('pointerdown', ()=>this.goToJudaism());
    this.judaismButton.setScale(0.6);

    /*
    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow"
    });
    */

  }

  goToChristianity(){
    this.scene.start("christianityScene");
  }

  goToIslam(){
    this.scene.start("islamScene");
  }

  goToJudaism(){
    this.scene.start("judaismScene");
  }


}
