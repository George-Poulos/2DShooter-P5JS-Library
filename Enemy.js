

function Enemy(x, y, health, movement){
    this.x = x;
    this.y = y;

    this.movement = movement;

    this.health = health;
    this.size = 20 * this.health;

    this.errorPad = 5;

    this.show = function(){
        fill(255,0,0);
        ellipse(this.x, this.y, this.size, this.size);
        fill(255);
    };

    this.update = function(player){
        this.follow(player);
        this.show();
    };

    this.doDamage = function () {
        if(this.health > 0){
            this.health = this.health - 1;
        }
        this.size = 20 * this.health;
    };

    this.up = function(){
        if(this.y > 0)
            this.y -= this.movement;
    };
    this.down = function () {
        if (this.y < height)
            this.y += this.movement;
    };
    this.right = function(){
        if(this.x < width)
            this.x += this.movement;
    };
    this.left = function(){
        if(this.x > 0)
            this.x -= this.movement;
    };

    this.follow = function(player){
        var prev;
        if((Math.abs((player.x - this.x)) > this.errorPad)){
            if(player.x > this.x)
                this.right();
            else if(player.x < this.x)
                this.left();
        }
        else{
            prev = this.movement;
            this.movement = 1;
            if(player.x > this.x)
                this.right();
            else if(player.x < this.x)
                this.left();
            this.movement = prev;
        }

        if((Math.abs((player.y - this.y)) > this.errorPad)) {
            if (player.y > this.y)
                this.down();
            else if (player.y < this.y)
                this.up();
        }
        else{
            prev = this.movement;
            this.movement = 1;
            if (player.y > this.y)
                this.down();
            else if (player.y < this.y)
                this.up();
            this.movement = prev;
        }
    }
}