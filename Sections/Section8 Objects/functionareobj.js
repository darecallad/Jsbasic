// Functions are Objects

function Circle(raduis) {
    this.radius = raduis;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle1 = new Function('raduis',`
    this.raduis = raduis;
    this.draw = function(){
        console.log('draw');
}`
);

const another = Circle1(1);

console.log(Circle1.constructor);