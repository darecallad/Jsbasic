// Method Overriding
// Overriding the method from parent class and can reuse it if necessary

class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log('move from parent');
    }
}

class Circle extends Shape{
    constructor(color, raduis){
        super(color);
        this.raduis = raduis;
    }
    move(){
        super.move();   // call parent's move method
        console.log('move from child');  // overriding the mvoe method from parents
    }
}

const c = new Circle('blue',1);
c.move();