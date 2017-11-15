/**
 * @author - George Poulos
 * @constructor
 */

function Player() {

    this.y = random(30, width-30);
    this.x = random(30, width-30);

    this.health = 1;

    this.baseSize = 32;
    this.size = this.baseSize * this.health;

    this.gravity = 0;
    this.movement = 10;
    this.velocity = 0;

    this.dirX = 1;
    this.dirY = 0;


    this.cannonSizeX = 10;
    this.cannonSizeY = 10;

    this.bulletSpeed = 10;

     this.bullets = [new Bullet()];

    this.prevTime = millis();
    this.shootTime = 200;

    this.show = function() {
        fill(255);
        rect((this.x + this.size/2 * this.dirX) - this.cannonSizeX/2, (this.y + this.size/2 * this.dirY) - this.cannonSizeY/2, 10, 10);
        ellipse(this.x, this.y, this.size, this.size);
    };

    this.up = function() {
        this.y += -1 * this.movement;
        this.dirX = 0;
        this.dirY = -1;
    };

    this.down = function(){
        this.y += this.movement;
        this.direction = 270;
        this.dirX = 0;
        this.dirY = 1;
    };

    this.right = function(){
        this.x += this.movement;
        this.direction = 180;
        this.dirX = 1;
        this.dirY = 0;
    };

    this.left = function(){
        this.x += -1 * this.movement;
        this.dirX = -1;
        this.dirY = 0;
    };

    this.resetShootTime = function(){
        this.prevTime = millis() - this.shootTime;
    };

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

        if (this.x < 0){
            this.x = 0;
            this.velocity = 0;
        }

        if(this.x > width){
            this.x = width;
            this.velocity = 0;
        }

        this.show();

        for(var i = this.bullets.length-1; i > 0; i--){
            this.bullets[i].update();
            this.bullets[i].show();
            if(this.bullets[i].offScreen()){
                this.bullets.splice(i,1);
            }
        }

    };

    this.hitEnemy = function(enemy){
        return (this.x + (this.size / 2) > (enemy.x - enemy.size / 2) && this.x - (this.size / 2) < (enemy.x + enemy.size / 2 )) && (this.y + (this.size / 2) > (enemy.y - enemy.size / 2) && this.y - (this.size / 2) < (enemy.y + enemy.size / 2));
    };

    this.doDamage = function(){
        this.health--;
        this.size = this.baseSize * this.health;
    };

    this.shoot = function(){
        if(millis() - this.prevTime > this.shootTime) {
            var b = new Bullet();
            b.shoot(this.x, this.y, this.dirX * this.bulletSpeed, this.dirY * this.bulletSpeed);
            this.bullets.push(b);
            this.prevTime = millis();
        }
    }

}
