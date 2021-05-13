// Abstraction

function Circle(raduis){
    this.radius = raduis;
    this.defaultlocation = {x:0, y:0};
    
    this.draw = function(){
        console.log('draw');
    }
}

// hide the detail only show the necessary
// 