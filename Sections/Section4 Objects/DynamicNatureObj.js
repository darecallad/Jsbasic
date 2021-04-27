function Circle(radius){
    this.raduis = radius;
}

const circle = new Circle(1);

circle.color = 'yellow'; 
delete circle.color;

console.log(circle);