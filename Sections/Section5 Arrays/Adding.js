// Adding elements

const number = [3,4];

// add end
number.push(5,6,7);
console.log(number);
//add beginning
number.unshift(0,0);
console.log(number);
//add middle
number.splice(2,0,'a');
console.log(number);