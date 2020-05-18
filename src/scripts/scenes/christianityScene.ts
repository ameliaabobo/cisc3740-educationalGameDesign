export default class christianityScene extends Phaser.Scene {
    private background: any;
    private book: any;
    private food: any;
    private leader: any;
    private money: any;
    private place: any;
    private vehicle: any;

    constructor() {
      super({ key: 'christianityScene' });
    }

    create() {
        this.background = this.add.image(0, 0, "christianityBackground");
        this.background.setScale(0.73);
        this.background.setOrigin(0,0);

        this.book = this.add.image(100, 100, "christianityBook");
        this.book.setScale(0.1);

        this.food = this.add.image(200, 200, "christianityFood");
        this.food.setScale(0.1);

        this.leader = this.add.image(300, 300, "christianityLeader");
        this.leader.setScale(0.1);

        this.money = this.add.image(400, 400, "christianityMoney");
        this.money.setScale(0.1);

        this.place = this.add.image(500, 500, "christianityPlace");
        this.place.setScale(0.1);

        this.vehicle = this.add.image(600, 600, "christianityVehicle");
        this.vehicle.setScale(0.1);
        
        this.add.text(20, 20, "Christianity Scene", {
          font: "25px Arial",
          fill: "yellow"
        });
    
      }
    
      update() {
      }
}