enchant();
// class definitions
// player class
var graImg = 'img/graphic.png';
var bgImg = 'img/bg.jpg';
var effImg = 'img/effect0.gif';


var Player = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y) {
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets[graImg];
		this.x = x;
		this.y = y;
		this.frame = 0;
		game.rootScene.addEventListener('touchstart', function(e) {
			if (e.y < 304) {
				player.y = e.y;
				game.touched = true;
			}
		});
		game.rootScene.addEventListener('touchend', function(e) {
			if (e.y < 304) {
				player.y = e.y;
				game.touched = false;
			}
		});
		game.rootScene.addEventListener('touchmove', function(e) {
			if (e.y < 304) {
				player.y = e.y;
			}
		});
		
		this.addEventListener('enterframe', function() {
			if (game.touched && game.frame % 12 === 0) {
				var s = new PlayerShoot(this.x, this.y);
				
			}
		});
		
		game.rootScene.addChild(this);
	}
});

// enemy class
var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, theta) {
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets[graImg];
		this.x = x;
		this.y = y;
		this.frame = rand((6-3)+1) + 3;
		
		this.theta = theta * Math.PI / 180;
		this.direction = 0;
		this.moveSpeed = 3;
		
		// define enemy movement
		this.addEventListener('enterframe', function() {
			this.direction += this.theta;
			
			this.x -= this.moveSpeed * Math.cos(this.direction);
			this.y += this.moveSpeed * Math.sin(this.direction);
			
			// disappear when outside of screen
			if (this.y > 320 || this.x > 480 || this.x < -this.width || this.y < -this.height) {
				this.remove();
			} else if (this.age % 15 === 0) { // fire every 10 frames
				var s = new EnemyShoot(this.x, this.y);
			}
		});
		
		game.rootScene.addChild(this);
	},
	remove: function() {
		game.rootScene.removeChild(this);
		delete enemies[this.key];
		delete this;
	}
});

// shoot enemy class
var ShootEnemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, direction) {
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets[graImg];
		this.x = x;
		this.y = y;
		this.frame = 2;
		this.direction = direction;
		this.moveSpeed = 10;
		
		this.addEventListener('enterframe', function() {
			this.x += this.moveSpeed * Math.cos(this.direction);
			this.y += this.moveSpeed * Math.sin(this.direction);
			
			if (this.y > 320 || this.x > 480 || this.x < -this.width || this.y < -this.height) {
				this.remove();
			}
		});
		
		game.rootScene.addChild(this);
	},
	remove: function() {
		game.rootScene.removeChild(this);
		delete this;
	}
});

// shoot player class
var ShootPlayer = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y, direction) {
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets[graImg];
		this.x = x;
		this.y = y;
		this.frame = 1;
		this.direction = direction;
		this.moveSpeed = 10;
		
		this.addEventListener('enterframe', function() {
			this.x += this.moveSpeed * Math.cos(this.direction);
			this.y += this.moveSpeed * Math.sin(this.direction);
			
			if (this.y > 320 || this.x > 480 || this.x < -this.width || this.y < -this.height) {
				this.remove();
			}
		});
		
		game.rootScene.addChild(this);
	},
	remove: function() {
		game.rootScene.removeChild(this);
		delete this;
	}
});

// playershoot class
var PlayerShoot = enchant.Class.create(ShootEnemy, { // succeeds bullet class
	initialize: function(x,y) {
		ShootEnemy.call(this, x, y, 0);
		
		this.addEventListener('enterframe', function() {
			// judges whether or not player's bullets have hit enemy
			for (var i in enemies) {
				if (enemies[i].intersect(this)) {
					// start explosion
					var blast = new Blast(enemies[i].x, enemies[i].y);
					
					
					// eliminates enemy if hit
					this.remove();
					enemies[i].remove();
					
					// adds to score
					game.score += 10;
				}
			}
		});
	}
});

// class for enemy bullets
var EnemyShoot = enchant.Class.create(ShootPlayer, { // Succeeds bullet class
	initialize: function(x, y) {
		ShootPlayer.call(this, x, y, Math.PI);
		
		this.addEventListener('enterframe', function() {
			if (player.within(this, 8)){ // 	bullet has hit player
				var blast = new Blast(player.x, player.y);
				
				
				game.end(game.score, "SCORE: " + game.score);
			}
		});
	}
})

// class for explosions
var Blast = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y) {
		enchant.Sprite.call(this, 16, 16);
		this.x = x;
		this.y = y;
		
		this.image = game.assets[effImg];
		this.frame = 0;
		this.duration = 20;
		
		this.addEventListener('enterframe', function(){
			// explosion animation
			this.frame = Math.floor(this.age/this.duration * 5);
			
			if (this.age === this.duration) {
				this.remove();
			}
		});
		
		game.rootScene.addChild(this);
	},
	remove: function() {
		game.rootScene.removeChild(this);
	}
});

// background class
var Background = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		enchant.Sprite.call(this, 960, 320);
		this.x = 0;
		this.y = 0;
		this.image = game.assets[bgImg];
		
		this.addEventListener('enterframe', function() {
			this.x--;
			if (this.x <= -480) {
				this.x = 0;
			}
		});
		
		game.rootScene.addChild(this);
	}
});

window.onload = function() {
	game = new Core(480, 320);
	
	// game properties
	game.fps = 24;
	game.score = 0;
	game.preload(graImg, effImg, bgImg);
	game.touched = false;
	
	game.onload = function() {
		// in-game variables and properties
		background = new Background();
		
		scoreLabel = new ScoreLabel(8, 8);
		game.rootScene.addChild(scoreLabel);
		
		player = new Player(20, 152);
		enemies = [];
		
		
		game.rootScene.addEventListener('enterframe', function() {
			if (rand(100) < 10) {
				// make enemies appear randomly
				var y = rand(304);
				if (y < 160) {
					theta = 1;
				} else {
					theta = -1;
				}
				var enemy = new Enemy(480, y, theta);
				enemy.key = game.frame;
				enemies[game.frame] = enemy;
			}
			
			scoreLabel.score = game.score;
			
		});
	};

	game.start();
};