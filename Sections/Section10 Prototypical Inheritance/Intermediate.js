// Intermediate Function Inheritance

function Shape(color){
    this.color = color;
};
Shape.prototype.style = function (){
    console.log('Style');
}

function Square(size,color){
    this.size = size;
    Shape.call(this,color);
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const square1 = new Square(10,'blue');

console.log(square1);

// create a function that do the extendtion
// for each one 
// for re-use
