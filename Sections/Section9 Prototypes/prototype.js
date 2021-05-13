// Prototype vs Instance Members

function Circle(radius){
    // Instance Members
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}



// Prototype members
Circle.prototype.draw = function(){
    console.log('draw');
    this.move();
}

const c1 = new Circle(1);
c1.draw();