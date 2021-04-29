// Array From Range

const numbers = arrayFromRange(1,4);

console.log(numbers);

function arrayFromRange(min,max){
    let numbers =[];
    for(let n = min; n <= max; n++)
        numbers.push(n);
    return numbers;
}


//array.push(); put the element inside 