// Getters and Setters

const game = {
    gameName: 'LTS',
    gameLocation: 'LA',

    get fulInformation(){
        return `${game.gameName} ${game.gameLocation}`;
    },

    set fulInformation(information){
        const parts = information.split(' ');
        game.gameName = parts[0];
        game.gameLocation = parts[1];

    }
};

game.fulInformation = 'CCTV MO';
console.log(game);

// getting => access porperties
// setters => change mutate them


