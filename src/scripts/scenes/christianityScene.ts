export default class christianityScene extends Phaser.Scene {
    private background: any;
    private book: any;
    private food: any;
    private leader: any;
    private money: any;
    private places: any;
    private vehicle: any;
    private player: any;
    private cursorKeys: any;
    private spacebar: any;
    private score: any;
    private scoreLabel: any;
    //private collectibles: any;

    constructor() {
      super({ key: 'christianityScene' });
    }

    create() {
        this.add.text(20, 20, "Christianity Scene", {
          font: "25px Arial",
          fill: "yellow"
        });

        this.background = this.add.image(0, 0, "christianityBackground");
        this.background.setScale(0.73);
        this.background.setOrigin(0,0);

        this.book = this.add.image(100, 100, "christianityBook");
        this.book.setScale(0.1);
        //this.collectibles.add(this.book);

        this.food = this.add.image(200, 200, "christianityFood");
        this.food.setScale(0.1);
        //this.collectibles.add(this.food);
        

        this.leader = this.add.image(300, 300, "christianityLeader");
        this.leader.setScale(0.1);

        this.money = this.add.image(400, 400, "christianityMoney");
        this.money.setScale(0.1);
        //this.collectibles.add(this.money);

        this.places = this.physics.add.group();

        var maxPlaces = 6;
        for(var i=0; i <= maxPlaces; i++){
          var xCoor = Phaser.Math.Between(0, 1000);
          var yCoor = Phaser.Math.Between(0, 1000)
          var place = this.add.image(xCoor, yCoor, "christianityPlace");
          place.setScale(0.15);
          
        }



        //this.place = this.add.image(500, 500, "christianityPlace");
        //this.place.setScale(0.1);

        this.vehicle = this.add.image(600, 600, "christianityVehicle");
        this.vehicle.setScale(0.1);

        this.physics.world.setBoundsCollision();

        this.player = this.physics.add.sprite(192, 336, "player");
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);



        //this.physics.add.overlap(this.player, this.money, this.pickMoney, null, this);
        //this.physics.add.overlap(this.player, this.food, this.pickFood, null, this);
        
        //this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        /*
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0,0);
        graphics.lineTo(400, 0);
        graphics.lineTo(400, 20);
        graphics.lineTo(0,20);
        graphics.lineTo(0,0);
        graphics.closePath();
        graphics.fillPath();

        this.score = 0;
        //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE", 16);
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE", scoreFormated, 16);
        */
    
      }

      /*
      zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
          stringNumber = "0" + stringNumber;
        }
        return stringNumber;
      }
      */
    
     movePlayerManager(){
       this.player.body.velocity.y = 0;
       this.player.body.velocity.x = 0;
        //this.player.setVelocity(0);
    
        if(this.cursorKeys.left.isDown){
          //this.player.setVelocityX(-200);
          this.player.body.velocity.x -= 50;
        }else if(this.cursorKeys.right.isDown){
          //this.player.setVelocityX(200);
          this.player.body.velocity.x += 50;
        }else if(this.cursorKeys.up.isDown){
          //this.player.setVelocityY(-200);
          this.player.body.velocity.y -= 50;
        }else if(this.cursorKeys.down.isDown){
          //this.player.setVelocityY(200);
          this.player.body.velocity.y += 50;
        }
    }

      update() {
        this.movePlayerManager();
      }
}