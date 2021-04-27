// Constructor Functions
// Camel Notation for function
// Constructor using Pascal Notation OneTwoThree
// Objects are dynamic 


function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}

const circle = new Circle(1);