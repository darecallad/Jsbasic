// Constructor Prototypes

Object.getPrototypeOf(myobj);
// myobj.__protp__  (parent of myobj)

// array.__proto__ === Array.prototype 

function Circle(radius){
    this.radius = radius;
}

const circle = new Circle(1);

