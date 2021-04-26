// Demerit Points

// Speed limit is 70 KM / hr
// under 70 => okay
// every 5 km upon get 1 point
// Math.floor(1.3) => 1
// more than 12 points => suspended

const speedLimit = 70;
const kmPerPoint = 5;
const suspendedPoint = 12;
function checkSpeed(speed){
    if( typeof speed !== 'number')  return NaN;
    
    let overSpeed = speed - speedLimit;
    if(overSpeed < kmPerPoint )   return 'Okay';
    
    let result = Math.floor(overSpeed/5);
    if(result > suspendedPoint) return 'Suspended';
    else return result + ' Points';
}

console.log(checkSpeed(88));
console.log(checkSpeed(70));
console.log(checkSpeed(100));
console.log(checkSpeed(200));
console.log(checkSpeed('ABC'));

