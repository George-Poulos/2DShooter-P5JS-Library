/**
 * Created by George on 11/13/17.
 */
var player;
var enemy;
var score = 0;
var up = false, down = false, left = false, right = false, shoot = false;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(900, 900);
    player = new Player();
    enemy = new Enemy(100,100,2,3);
}

function draw() {
    background(0);

    for(var i = player.bullets.length - 1; i > 0; i --){
        if(player.bullets[i].hitEnemy(enemy)){
            enemy.doDamage();
            player.bullets.splice(i,1);
            if(enemy.health <= 0)
                enemy = new Enemy(100,100,2,3);
        }
    }

    doMove();
    enemy.update(player);
    player.update();


}

function doMove(){
    if(right){
        player.right();
    }
    if(left){
        player.left();
    }
    if(down){
        player.down();
    }
    if(up){
        player.up();
    }
    if(shoot){
        player.shoot();
    }

}

function keyReleased(){
    if (keyCode === RIGHT_ARROW) {
        right = false;
    }
    if(keyCode === LEFT_ARROW) {
        left = false;
    }
    if(keyCode === UP_ARROW){
        up = false;
    }
    if(keyCode === DOWN_ARROW){
        down = false;
    }
    if(key === ' ') {
        shoot = false;
        player.resetShootTime();
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        right = true;
    }
    if(keyCode === LEFT_ARROW) {
        left = true;
    }
    if(keyCode === UP_ARROW){
        up = true;
    }
    if(keyCode === DOWN_ARROW){
        down = true;
    }

    if(key === ' '){
        shoot = true;
    }

    return false;

}