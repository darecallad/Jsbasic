// Lterating instance and prototype members

function Circle(radius){
    //instance members
    this.radius = radius;
    this.move = function(){
        console.log('Move');    
    }
}

const c1 = new Circle(1);

//Prototype members
Circle.prototype.draw = function(){
    console.log('draw');
}

const show = Object.keys(c1); // Object.keys only return instance members

for(let key in c1)
    console.log(key); 
// for in loop return all the members (instand and prototypes)

c1.hasOwnProperty('radius'); // check instand member
