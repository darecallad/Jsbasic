
// Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculating a value
function square(number){
     return number * number;
}

let number = square(2);
// 1 function call
console.log(number);
// 2 function calls
console.log(square(2));