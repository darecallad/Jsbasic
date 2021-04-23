// if a customer has more than 100 points gold
// otherwise they are sliver customers

const points = 110;
let type = points > 100; 
// let type = points > 100 ? 'Gold customer' : 'Silver Customer';
// console.log(type);

if(type) 
    console.log('Gold Customer');
else
    console.log('Sliver Customer');

