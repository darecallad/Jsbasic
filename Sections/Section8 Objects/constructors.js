// Constructors

function Circle(radius){
    console.log('This' , this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);
console.log(another);