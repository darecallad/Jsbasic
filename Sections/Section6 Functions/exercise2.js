// Area of Circle

// circle.radius = 2;
// circle.area = 2;


const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);