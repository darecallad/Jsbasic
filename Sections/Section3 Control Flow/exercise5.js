// Even and Odd Numbers
// Show each number under input number and 
// display they are odd or even number

function showNumbers(limit){
    if(typeof limit !== 'number') 
        console.log('NaN');

    for( let i = 0; i <= limit; i++){
        if(i%2 === 0)  console.log(i, 'Even Number');
        else console.log(i, 'Odd Number');
    }
    
    
}

showNumbers(7);
showNumbers(1);

showNumbers('gg');