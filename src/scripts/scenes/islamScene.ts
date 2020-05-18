export default class islamScene extends Phaser.Scene {
    private background: any;

    constructor() {
      super({ key: 'islamScene' });
    }

    create() {

        this.background = this.add.image(0, 0, "islamBackground");
        this.background.setScale(1.95);
        this.background.setOrigin(0,0);
        
        this.add.text(20, 20, "Islam Scene", {
          font: "25px Arial",
          fill: "green"
        });
    
      }
    
      update() {
      }
}