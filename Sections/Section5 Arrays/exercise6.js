//get max 

const numbers =[1,2,7,4,5];
const max = getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length === 0) return undefined;

    // let temp = 0;
    // for(let element of array)
    //     if(element > temp)
    //         temp = element;

    // return temp;

    return array.reduce((a,b) => 
        (a > b) ? a : b); 
}