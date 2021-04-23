const person = {
    name: 'Mosh',
    age: 18,
    nickName: 'Dumb'
};

for(let key in person){
    console.log(key, person[key]);
}

const colors = ['red','greem','blue'];

for(let index in colors){
    console.log(index, colors[index]);
}