// Prototypes and Prototypical Inheritance

// Prototypes = Parent Objs

let x = {};
let y = {};

const result = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
console.log(result);