// Default Parameters

function interest (principal, rate = 3.5, year = 50){
    return principal * rate * year;
}

console.log(interest(10, undefined, undefined));

console.log(interest(10));

// better default value be the last or the rest are all 
// default value