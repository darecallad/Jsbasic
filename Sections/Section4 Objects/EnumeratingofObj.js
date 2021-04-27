// Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

for(let key in circle)
    console.log(key, circle[key]);

for( let key of circle)
    console.log(key); //error obj is not iterable

Object.key(circle); 
Object.defineProperties(circle);