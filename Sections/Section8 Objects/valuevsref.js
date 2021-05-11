//Value vs Reference type

let x = 10;
let y = x;

x = 20;

console.log('x = ',x, 'y = ',y);

let a = {value: 10};
let b = a;

a.value = 20;

console.log('a = ', a , 'b = ', b);

let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log('number : ' ,number);

let number1 = {value : 10};

function increaseValue(number1){
    number1.value++;
}
increaseValue(number1);
console.log(number1);

