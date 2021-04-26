// Landscape or Portrait

function isLandscape(width, height){
    return width > height ? 'Landscape' : 'Portrait';
}

let result = isLandscape(5,3);
console.log(result);