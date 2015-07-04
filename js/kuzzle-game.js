KuzzleGame = typeof KuzzleGame === 'undefined' ? {} : KuzzleGame;

KuzzleGame = {

    game: null,
    sprites: null,

    arrowsMatrix: new Array(4),
    arrowLeft: 1,
    arrowRight: 2,
    arrowUp: 3,
    arrowDown: 4,
    emptyArrow: 0,
    elementToGeneratePerLevel: 200,
    arrowsProbability: [0.6, 0.1, 0.1, 0.1, 0.1],

    /**
     * Get KuzzleGame Instance
     * @returns {KuzzleGame}
     */
    instance: function() {
        return this;
    },

    /**
     * Load your assets here. This is the first function launched
     */
    preload: function() {
        this.game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    },

    /**
     * Initialize your variables here
     */
    create: function() {
        var leftArrow = KuzzleGame.Arrow.Sprite;
        leftArrow.create(this.game, 10, 10);
        leftArrow.play();

        var rightArrow = KuzzleGame.Arrow.Sprite;
        rightArrow.create(this.game, 50, 10);
        rightArrow.play();
    },

    /**
     * Update your variables here. Typically, used for move your sprites (a loop is automaticaly launched by phaser)
     */
    update: function() {

    },

    /**
     * Update your render here (Typically used for text)
     */
    render: function() {
    },

    //Genere le tableau 2D qui contient l'ordre des fleche en fonction des probabilités renseignées.
    generateLevel: function() {

        for(arrowMatrixIndex = 0 ; arrowMatrixIndex < this.arrowsMatrix.length ; arrowMatrixIndex++){

            this.arrowsMatrix[arrowMatrixIndex] = new Array();

            for(generatingIndex=0;generatingIndex<this.elementToGeneratePerLevel;generatingIndex++) {

                this.arrowsMatrix[arrowMatrixIndex].push(this.generateRandomData());

            }
        }

        console.log(this.arrowsMatrix);
    },

    generateRandomData: function() {
        var r = Math.random();
        var s = 0;

        for(var i = 0; i < this.arrowsProbability.length; i++) {
            s += this.arrowsProbability[i];
            if(r <= s)
                return i;
        }
    }

};
