// divisible by 3 => fizz
// divisible by 5 => Buzz
// divisible by 15 => FizzBuzz
// not divisible by 3 oe 5 we get same input


// Should check if the input is number
// typeof input !== 'number'
function fizzBuzz(input){
    if(input % 15 === 0)
        console.log('FizzBuzz');
    else if(input % 5 === 0)
        console.log('Buzz');
    else if(input % 3 === 0)
        console.log('Fizz');     
    else
        console.log(input);
}

fizzBuzz(15);
fizzBuzz(5);
fizzBuzz(3);
fizzBuzz(7);