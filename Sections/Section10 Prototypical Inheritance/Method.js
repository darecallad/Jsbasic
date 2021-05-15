// Method Overriding

// When a method should have special for a obj
// We use Method Overriding
// Important : defind it after setting the prototype 

function Shape(color){
    this.color = color;
}
Shape.prototype.draw = function(){
    console.log('draw');
}

function extend ( Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Dizzy (raduis){
    this.raduis = raduis;
}

extend(Dizzy, Shape);
const d = new Dizzy(1);

Dizzy.prototype.draw = function(){
    // way to call parent's function
    Shape.prototype.draw.call(this);


    console.log('special draw dizzy');
}
d.draw();
const s = new Shape('red');
s.draw();