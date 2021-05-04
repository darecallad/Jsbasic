// The Rest Operator

function sum(discount, ...prices){ // ... rest operator
    console.log(args);  //rest should be the last 

    return args.reduce((a,b) => a +b); // 
}

console.log(sum (0.1, 20, 30));

