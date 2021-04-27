// cloning an object

const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};

const another = {};
for(let key in circle)
    another[key] = circle[key];

// better way 

const another1 = Object.assign({
    color: 'yellow'
}, circle); // take all the properties
