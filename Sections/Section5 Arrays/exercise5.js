// Count Occurrences

const numbers = [1,2,3,1,5];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement){
    // let total = 0;

    // for( let number of array){
    //     if(number === searchElement)
    //         total +=1;
    // }
    // return total;
    return array.reduce((accmulator, current) =>{
        const occurrence =  ( current === searchElement) ? 1 : 0;
        return accmulator + occurrence;
    },0);
}