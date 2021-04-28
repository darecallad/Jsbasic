// Emptying an Array

let numbers = [1,2,3,4];
let another = numbers;
// solution1
numbers = [];
console.log(numbers);
console.log(another);
//solution2
numbers.length = 0;

console.log(numbers);
console.log(another);

//solution3
numbers.splice(0,numbers.length);

//solution4
while(numbers.length > 0)
numbers.pop();

