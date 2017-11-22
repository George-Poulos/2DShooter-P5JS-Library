/**
 * Example of the library
 */

var score = 0;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(900, 900);
    this.player = new Player();
    this.controller = new Controller(this.player);
    this.enemy = new Enemy(100,100,2,3);
}

function draw() {
    background(0);

    for(var i = this.player.bullets.length - 1; i > 0; i --){
        if(this.player.bullets[i].hitEnemy(enemy)){
            this.enemy.doDamage();
            this.player.bullets.splice(i,1);
            if(this.enemy.health <= 0)
                this.enemy = new Enemy(100,100,2,3);
        }
    }

    if(this.player.hitEnemy(this.enemy)){
        this.player.doDamage();
        if(this.player.health <= 0){
            delete(this.controller);
            delete(this.player);
            this.player = new Player();
            this.controller = new Controller(this.player);
        }
    }

    this.controller.doMove();
    this.enemy.update(player);
    this.player.update();


}

function keyPressed(){
    this.controller.keyPressed(key, keyCode)
}

function keyReleased(){
    this.controller.keyReleased(key, keyCode);
}




