// ES6 Class

class Circle{
    constructor(raduis){
        this.raduis = raduis;
        this.move = function(){
            console.log('move');
        }
    }
    draw(){
        console.log('draw');
    }
}

const c = new Circle(1);
console.log(c);