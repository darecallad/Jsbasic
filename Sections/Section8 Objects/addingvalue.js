// Adding and Removing Value

function Circle(raduis){
    this.radius = raduis;
    this.draw = function(){
        console.log('draw');
    }
}


const circle = new Circle1(1);

circle.location = {x :1};
circle['location'] = {x :1};

delete circle.location;