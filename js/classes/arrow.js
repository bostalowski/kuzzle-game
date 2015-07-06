KuzzleGame.Arrow = {
    Sprite: function() {

        this.name = 'arrow';
        this.sprite = null;
        this.rectangle = null;
        this.alreadyHit = false;
        this.type = null;

        this.create = function(game, x, y, name, type) {
            this.name = name;
            this.type = type;
            this.sprite = game.add.sprite(x, y, this.name);
            game.physics.arcade.enable(this.sprite, Phaser.Physics.ARCADE);
            this.sprite.body.velocity.y = 500;
            //game.add.tween(this.sprite.body).to( { y: 400 }, 3000, Phaser.Easing.Linear.None, true);
            //this.sprite.visible = false;
            //this.sprite.animations.add(KuzzleGame.Arrow.Animation.name);
            //this.rectangle = new Phaser.Rectangle(x, y, this.sprite.width, this.sprite.height);

            return this;
        };

        this.play = function() {
            this.sprite.play(KuzzleGame.Arrow.Animation.name);
        };

        this.update = function(game) {
            //set visible juste when they get close to the main screen (earn frames ?)
            /*if(this.sprite.y > -1000) {
                this.sprite.visible = true;
                if(!this.rectangle) {
                    this.rectangle = new Phaser.Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height);
                }
            }

            this.sprite.y += KuzzleGame.Arrow.Animation.speed * game.time.elapsed;

            if(this.rectangle) {
                this.rectangle.y = this.sprite.y;
            }

            if (this.sprite.y > game.height)
            {
                this.remove();
                return 0;
            }*/
        };

        this.remove = function() {
            this.sprite.destroy();

            return this;
        };
    },

    Animation : {
        name: 'down',
        speed: 0
    }
};
