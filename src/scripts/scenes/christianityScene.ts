export default class christianityScene extends Phaser.Scene {
    private background: any;

    constructor() {
      super({ key: 'christianityScene' });
    }

    create() {
        this.background = this.add.image(0, 0, "christianityBackground");
        this.background.setScale(0.73);
        this.background.setOrigin(0,0);
        
        this.add.text(20, 20, "Christianity Scene", {
          font: "25px Arial",
          fill: "yellow"
        });
    
      }
    
      update() {
      }
}