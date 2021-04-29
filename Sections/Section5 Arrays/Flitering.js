//Flitering an Array

const numbers = [1,2,3];

numbers.filter(function(value){
    return value >=0;
});

const filtered = numbers.filter(value => value >=0);

console.log(filtered);