// functions are objects
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}

const another = new Circle(1);

Circle.call({},1); // create an object and pass 1 into it
Circle.apply({}, [1,2,3]); // pass an array into it

