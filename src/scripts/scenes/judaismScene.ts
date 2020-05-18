export default class judaismScene extends Phaser.Scene {
    private background: any;
    private book: any;
    private food: any;
    private leader: any;
    private money: any;
    private place: any;
    private vehicle: any;

    constructor() {
      super({ key: 'judaismScene' });
    }

    create() {
        this.background = this.add.image(250, 0, "judaismBackground");
        this.background.setScale(1.4);
        this.background.setOrigin(0,0);

        this.book = this.add.image(100, 100, "judaismBook");
        this.book.setScale(0.1);

        this.food = this.add.image(200, 200, "judaismFood");
        this.food.setScale(0.1);

        this.leader = this.add.image(300, 300, "judaismLeader");
        this.leader.setScale(0.1);

        this.money = this.add.image(400, 400, "judaismMoney");
        this.money.setScale(0.1);

        this.place = this.add.image(500, 500, "judaismPlace");
        this.place.setScale(0.1);

        this.vehicle = this.add.image(600, 600, "judaismVehicle");
        this.vehicle.setScale(0.1);

        
        this.add.text(20, 20, "Judaism Scene", {
          font: "25px Arial",
          fill: "blue"
        });
    
      }
    
      update() {
      }
}