// Creating your own protitypical

function Shape(){};
Shape.prototype.style = function (){
    console.log('Style');
}
function C1(raduis){
    this.raduis = raduis;
}
C1.prototype.draw = function(){
    console.log('draw');
}

C1.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new C1(1);

c.style();

// s inheritance Shape prototype inheritance Obj prototype
// Shape.prototype = Object.create(Object.prototype);

// c1 inheritance Circle inheritance obj prototypes
// Circle.prototype = Object.create(Object.prototype);   

// let Circle inheritance Shape prototype

