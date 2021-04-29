//Includes

const numbers = [1,2,3,4];

function includes(array,searchElement){
    let isIncluded = false;
    for(let i = 0; i < array.length; i++)
        if(array[i] === searchElement)
            isIncluded = true;
    
    return isIncluded;
}

let result = includes(numbers, 3);
console.log(result);

result = includes(numbers, -2);
console.log(result);
