KuzzleGame = typeof KuzzleGame === 'undefined' ? {} : KuzzleGame;

KuzzleGame = {

    game: null,
    sprites: null,


    /**
     * Load your assets here. This is the first function launched
     */
    preload: function() {
        KuzzleGame.Level.generateLevel();

        //this.game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
        this.game.load.spritesheet('arrow', 'assets/sprites/50x50.png', 50, 50, 1);
    },

    /**
     * Initialize your variables here
     */
    create: function() {
        this.sprites = [];

        var leftArrow = new KuzzleGame.Arrow.Sprite();
        leftArrow.create(this.game, 10, 0, 'arrow');
        this.sprites.push(leftArrow);

        /*var rightArrow = new KuzzleGame.Arrow.Sprite();
        rightArrow.create(this.game, 110, 0, 'arrow');
        this.sprites.push(rightArrow);

        var upArrow = new KuzzleGame.Arrow.Sprite();
        upArrow.create(this.game, 210, 0, 'arrow');
        this.sprites.push(upArrow);

        var downArrow = new KuzzleGame.Arrow.Sprite();
        downArrow.create(this.game, 310, 0, 'arrow');
        this.sprites.push(downArrow);*/

        for(var i=0; i<this.sprites.length; i++) {
            this.sprites[i].play();
        }
    },

    /**
     * Update your variables here. Typically, used for move your sprites (a loop is automaticaly launched by phaser)
     */
    update: function() {
        for(var i=0; i<this.sprites.length; i++) {
            this.sprites[i].update(this.game);
        }
    },

    /**
     * Update your render here (Typically used for text)
     */
    render: function() {

    }
};
