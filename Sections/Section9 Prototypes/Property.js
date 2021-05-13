// Property Descriptions

let person = {name : 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name' ,{
    writable: false, // rewriteable
    enumerable: false, //show on or not
    configurable: false  // cannot delete property
});