// Constructor property

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('DRAW');
    }
}

const circle = new Circle(1);

console.log(circle);
circle.constructor;


// every obj has constructor
