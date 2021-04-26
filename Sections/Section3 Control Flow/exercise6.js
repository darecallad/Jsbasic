// Count Truthy

const array =[1,2,3];

function countTruthy(array){
    let count = 0;
    for(let element of array){
        if(element) 
            count++;
    }
    return count;
}

console.log(countTruthy(array));