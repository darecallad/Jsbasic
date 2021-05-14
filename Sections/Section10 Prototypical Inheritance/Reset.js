// Resetting the Constructor

//Whenever you reset the prototype 
//You should also reset the constructor of the obj

//exp 

C1.prototype = Object.create(Shape.prototype);
C1.prototype.constructor = C1;

