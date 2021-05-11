//Factories

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log(`I DRAW A CIRCLE WITH 
            ${radius} 
            RADIUS`);
        }
    };
}

const circle = createCircle(1);
const circle1 = createCircle(2);

circle.draw();
circle1.draw();
