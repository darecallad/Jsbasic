// Count Occurrences

const numbers = [1,2,3,4,5];
const output = move(numbers,0,3);

console.log(output);

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length){
        console.error('Invalid Offset');
        return;
    } 
    
    const output = [...numbers];
    const element = output.splice(index,1)[0];
    output.splice(position,0,element);
    
    return output;
}