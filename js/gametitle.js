var GameTitle = function(game) {};

GameTitle.prototype = {
    normalButton: null,
    hardButton: null,
    extremeButton: null,
    howToPlayButton: null,
    titleMusic: null,

    preload: function() {

        this.game.load.audio('epicsong', ['assets/audio/music/title/BoxCat_Games_-_10_-_Epic_Song.ogg', 'assets/audio/music/title/BoxCat_Games_-_10_-_Epic_Song.mp3']);

    },

    create: function() {

        KuzzleGame.Background.create(this.game,'title');
        var gameTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 200, 'Arrow Hero', { font: "bold 40px Arial", fill: "#ff0044", align: "center" });
        gameTitle.anchor.setTo(0.5, 0.5);

        this.titleMusic = this.game.add.audio('epicsong');
        this.titleMusic.loop = true;
        this.titleMusic.play();

        this.normalButton =  this.game.add.text(this.game.world.centerX,
            this.game.world.centerY - 50, 'Normal', { font: "30px Arial", fill: "#ff0044", align: "center" });
        this.normalButton.anchor.setTo(0.5, 0.5);
        this.normalButton.inputEnabled = true;
        this.normalButton.events.onInputDown.add(this.selectNormalMode, this);

        this.hardButton = this.game.add.text(this.game.world.centerX,
            this.game.world.centerY + 50, 'Hard', { font: "30px Arial", fill: "#ff0044", align: "center" });
        this.hardButton.anchor.setTo(0.5, 0.5);
        this.hardButton.inputEnabled = true;
        this.hardButton.events.onInputDown.add(this.selectHardMode, this);

        this.extremeButton = this.game.add.text(this.game.world.centerX,
            this.game.world.centerY + 150, 'Extreme', { font: "30px Arial", fill: "#ff0044", align: "center" });
        this.extremeButton.anchor.setTo(0.5, 0.5);
        this.extremeButton.inputEnabled = true;
        this.extremeButton.events.onInputDown.add(this.selectExtremeMode, this);

        this.howToPlayButton = this.game.add.text(this.game.world.centerX,
            this.game.world.centerY + 250, 'How to play', { font: "30px Arial", fill: "#ff0044", align: "center" });
        this.howToPlayButton.anchor.setTo(0.5, 0.5);
        this.howToPlayButton.inputEnabled = true;
        this.howToPlayButton.events.onInputDown.add(this.selectHowToPlay, this);

    },

    update: function(){
        KuzzleGame.Background.update();
    },

    playGame: function() {
        this.game.state.start("kuzzlegame");
    },

    selectNormalMode: function() {
        KuzzleGame.Difficulty.setDifficulty(KuzzleGame.Difficulty.DIFFICULTY_NORMAL);
        this.titleMusic.stop();
        this.playGame();
    },

    selectHardMode: function() {
        KuzzleGame.Difficulty.setDifficulty(KuzzleGame.Difficulty.DIFFICULTY_HARD);
        this.titleMusic.stop();
        this.playGame();
    },

    selectExtremeMode: function() {
        KuzzleGame.Difficulty.setDifficulty(KuzzleGame.Difficulty.DIFFICULTY_EXTREME);
        this.titleMusic.stop();
        this.playGame();
    },

    selectHowToPlay: function() {
        this.game.state.start("howtoplay");
    },

    onReceiveHosts: function(response) {

        console.log(response);

        hosts = response.result.hits.hits;

        normalCount = 0;
        hardCount = 0;
        extrementCount = 0;

        for(var i=0; i<hosts.length; hosts++) {
            //TODO mets ce bout de code à jour en fonction du tableau
            if(hosts[i]._source.hostDifficulty === KuzzleGame.Difficulty.DIFFICULTY_NORMAL) {
                normalCount++;
            } else if(hosts[i]._source.hostDifficulty === KuzzleGame.Difficulty.DIFFICULTY_HARD) {
                hardCount++;
            } else if(hosts[i]._source.hostDifficulty === KuzzleGame.Difficulty.DIFFICULTY_EXTREME) {
                extrementCount++;
            }
        }


        this.normalButton.setText('Normal (' + normalCount + ' hosts waiting)');
        this.hardButton.setText('Hard (' + hardCount + ' hosts waiting)');
        this.extremeButton.setText('Extreme (' + extrementCount + ' hosts waiting)');
    }
};
