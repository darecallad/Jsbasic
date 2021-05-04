// Try and Catch

const game = {
    gameName: 'LTS',
    gameLocation: 'LA',

    get fulInformation(){
        return `${game.gameName} ${game.gameLocation}`;
    },

    set fulInformation(information){
        // error handling
        if(typeof information !== 'string')
            throw new Error('Information is not a string');

        const parts = information.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a Name and Location');
        game.gameName = parts[0];
        game.gameLocation = parts[1];

    }
};

try{
    game.fulInformation = 123;
}
catch(e){
    alert(e);
}