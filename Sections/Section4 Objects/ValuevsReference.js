// Value vs Reference type

let x = 10;
let y = x;

x = 20;
console.log(x,y);

let a = {value : 20}; // address
let b = a; // point to same obj of memory

a.value = 10;
console.log(a,b);