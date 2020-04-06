# p5.js library for a simple 2d shooter

This library was created in a span of a few hours and attempts to have everything
you may need to create a simple 2d shooter. 

You can view an example of this library in action here :
[App](https://p5js-2d-shooter.herokuapp.com/index.html)

## Objects 
### Player
[Player Class](https://github.com/George-Poulos/2DShooter-P5JS-Library/blob/master/Player.js);
    `new Player() // Spawns a new user controlled player in the middle of the map`
### Bullet
[Bullet Class](https://github.com/George-Poulos/2DShooter-P5JS-Library/blob/master/Bullet.js)
    `new Bullet() // spawns new projectile (Used by Player)`
### Enemy
[Enemy Class](https://github.com/George-Poulos/2DShooter-P5JS-Library/blob/master/Enemy.js)
    `new Enemy(x, y, health, movement) // Spawns a new enemy at X-pos : x, Y-pos : y with health and movement speed.`
### Controller
[Controller Class](https://github.com/George-Poulos/2DShooter-P5JS-Library/blob/master/Controller.js)
    `new Controller(Player p) // Creates a controller, and gives a player as an argument to control`
    
