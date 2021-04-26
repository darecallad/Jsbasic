// String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 5,
    director: 'b'
};
function showProperties(obj){
    for(let element in obj){
        if( typeof obj[element] === 'string')
            console.log(element, obj[element]);
    }
}

showProperties(movie);