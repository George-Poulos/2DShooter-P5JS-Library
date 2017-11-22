function Controller(player){
	this.up = false, this.down = false, this.left = false, this.right = false, this.shoot = false;
	this.player = player;

	this.keyReleased = function(key, keyCode){
	    if (keyCode === RIGHT_ARROW) {
	        this.right = false;
	    }
	    if(keyCode === LEFT_ARROW) {
	        this.left = false;
	    }
	    if(keyCode === UP_ARROW){
	        this.up = false;
	    }
	    if(keyCode === DOWN_ARROW){
	        this.down = false;
	    }
	    if(key === ' ') {
	        this.shoot = false;
	        this.player.resetShootTime();
	    }
	}

	this.keyPressed = function(key, keyCode) {
	    if (keyCode === RIGHT_ARROW) {
	        this.right = true;
	    }
	    if(keyCode === LEFT_ARROW) {
	        this.left = true;
	    }
	    if(keyCode === UP_ARROW){
	        this.up = true;
	    }
	    if(keyCode === DOWN_ARROW){
	        this.down = true;
	    }

	    if(key === ' '){
	        this.shoot = true;
	    }

	    return false;

	}
	this.doMove = function(){
	    if(this.right){
	        this.player.right();
	    }
	    if(this.left){
	        this.player.left();
	    }
	    if(this.down){
	        this.player.down();
	    }
	    if(this.up){
	        this.player.up();
	    }
	    if(this.shoot){
	        this.player.shoot();
	    }
	}
}