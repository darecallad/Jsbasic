// Calling the Super Constructor

function Shape(color){
    this.color = color;
};
Shape.prototype.style = function (){
    console.log('Style');
}
function C1(raduis, color){
    Shape.call(this,color);
    this.raduis = raduis;
}
C1.prototype.draw = function(){
    console.log('draw');
}

C1.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new C1(1,'red');

console.log(c);