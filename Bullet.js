/**
 * @author - George Poulos
 *
 * Bullet Class
 */

function Bullet(){
    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.angle = 0;
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

            this.width = 10;
            this.height = 10;
            this.show();
    };

    this.hitEnemy = function(enemy){
        return (this.x > (enemy.x - enemy.size / 2) && this.x < (enemy.x + enemy.size / 2 )) && (this.y > (enemy.y - enemy.size / 2) && this.y < (enemy.y + enemy.size / 2));

    };

    this.show = function(){
        fill(255,255,255);
        ellipse(this.x, this.y, this.width, this.height);
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