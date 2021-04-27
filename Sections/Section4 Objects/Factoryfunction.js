// let circle = {
//     radius : 1,  //value can be any type
//     location: {
//         x:1,
//         y:1
//     },
//     isVisible : true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// let circle1 = {
//     radius : 1,  //value can be any type
//     location: {
//         x:1,
//         y:1
//     },
//     isVisible : true,
//     draw: function(){
//         console.log('draw');
//     }
// };  this will cause problem if you need to change method inside

//Factory function
function createCircle(radius){
    return {
        radius,

        draw(){ // if there is a bug, only need to 
            // change this function
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);
