export default class islamScene extends Phaser.Scene {
    private background: any;
    private book: any;
    private food: any;
    private leader: any;
    private money: any;
    private place: any;
    private vehicle: any;

    constructor() {
      super({ key: 'islamScene' });
    }

    create() {

        this.background = this.add.image(0, 0, "islamBackground");
        this.background.setScale(1.95);
        this.background.setOrigin(0,0);
        
        this.book = this.add.image(100, 100, "islamBook");
        this.book.setScale(0.1);
        
        this.food = this.add.image(200, 200, "islamFood");
        this.food.setScale(0.1);

        this.leader = this.add.image(300, 300, "islamLeader");
        this.leader.setScale(0.1);

        this.money = this.add.image(400, 400, "islamMoney");
        this.money.setScale(0.1);

        this.place = this.add.image(500, 500, "islamPlace");
        this.place.setScale(0.1);

        this.vehicle = this.add.image(600, 600, "islamVehicle");
        this.vehicle.setScale(0.1);

        this.add.text(20, 20, "Islam Scene", {
          font: "25px Arial",
          fill: "green"
        });
    
      }
    
      update() {
      }
}