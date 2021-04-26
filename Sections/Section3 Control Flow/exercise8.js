// Sum of Multyples of 3 and 5

function sum(limit){
    let sum = 0;

    for(let i = 0; i <= limit; i++){
        if(i % 3 ===0 || i % 5 ===0)
            sum = sum + i;
    }

    return sum;
}

console.log(sum(10));