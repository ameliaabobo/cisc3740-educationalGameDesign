export default class judaismScene extends Phaser.Scene {
    private background: any;

    constructor() {
      super({ key: 'judaismScene' });
    }

    create() {
        this.background = this.add.image(250, 0, "judaismBackground");
        this.background.setScale(1.4);
        this.background.setOrigin(0,0);
        
        this.add.text(20, 20, "Judaism Scene", {
          font: "25px Arial",
          fill: "blue"
        });
    
      }
    
      update() {
      }
}