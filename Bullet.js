/**
 * @author - George Poulos
 *
 * Bullet Class
 */

function Bullet(){
    this.size = 0;

    this.x = 0;
    this.y = 0;

    this.speed = 30;

    this.dirX = 0;
    this.dirY = 0;

    this.speed = 2;


    this.shoot = function(x, y, directionX, directionY){
            console.log('shoot');
            this.x = x;
            this.y = y;

            this.dirX = directionX;
            this.dirY = directionY;

            this.size = 10;
            this.show();
    };

    this.hitEnemy = function(enemy) {
        if ((this.x + (this.size/2) > (enemy.x - enemy.size / 2) && this.x - (this.size/2) < (enemy.x + enemy.size / 2 )) && (this.y + (this.size/2) > (enemy.y - enemy.size / 2) && this.y - (this.size/2) < (enemy.y + enemy.size / 2))) {
            return true;
        }
        return false;
    };

    this.show = function(){
        fill(255,255,255);
        ellipse(this.x, this.y, this.size, this.size);
    };

    this.update = function(){
        this.y += this.dirY * this.speed;
        this.x += this.dirX * this.speed;
    };

    this.offScreen = function(){
        if(this.x > width || this.x < 0 || this.y > height || this.y < 0){
            return true;
        }
    };

}