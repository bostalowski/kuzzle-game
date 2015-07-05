KuzzleGame.Arrow = typeof KuzzleGame.Arrow === 'undefined' ? {} : KuzzleGame.Arrow;

KuzzleGame.Arrow = {
    Sprite: function() {

        this.name = 'arrow';
        this.sprite = null;
        this.rectangle = null;

        this.create = function(game, x, y, name) {
            this.name = name;
            this.sprite = game.add.sprite(x, y, this.name);
            this.sprite.animations.add(KuzzleGame.Arrow.Animation.name);
            this.rectangle = new Phaser.Rectangle(x, y, this.sprite.width, this.sprite.height);

            return this;
        };

        this.play = function() {
            this.sprite.play(KuzzleGame.Arrow.Animation.name);
        };

        this.update = function(game) {
            this.sprite.y += KuzzleGame.Arrow.Animation.speed * game.time.elapsed;

            this.rectangle.y = this.sprite.y;

            if (this.sprite.y > 500)
            {
                this.remove();

                return 0;
            }
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
