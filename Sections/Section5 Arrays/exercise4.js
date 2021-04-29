// Moving Element

const numbers = [1,2,3,4];

const output = move(numbers, 1 , 4);


function move(array,index,offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid Offset');
        return;
    }
    
    const output = [...array];
    const element = output.splice(index,1)[0];
    // store the element we delete into the element [0];
    output.splice(position,0,element);
    return output;
    
}

console.log(output);