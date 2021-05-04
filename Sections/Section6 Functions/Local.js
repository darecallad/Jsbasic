// Local vs Global Scope


const color = 'red';

function start(){
    const message = 'hi';
    console.log(message);
}
function stopp() {
    const message = 'stop';
    
}

start();

console.log(stopp);