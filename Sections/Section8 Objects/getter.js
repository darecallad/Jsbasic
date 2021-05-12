// Getter and Setters

// Object.defineProperty(this, 
// 'defaultlocation', get: function(){
    // return defaultlocation;
// },
// set: function(value){
//     defaultlocation = values;
// }
// )
//

function Circle(raduis){
    this.radius = raduis;
    let defaultlocation = {x:0, y:0};
    
    this.draw = function(){
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
    get: function(){
        return defaultlocation;
        },
    set: function(value){
            defaultlocation = value;
        } 
    });
}