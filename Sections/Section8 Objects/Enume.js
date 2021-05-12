// Enumerating Properties

function Circle(raduis){
    this.radius = raduis;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle1(1);

for(let ket in circle){
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);