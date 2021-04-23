let i = 0;
while(i<=10){
   // if(i ===5) break;  // break jump out the loop
    if(i % 2 ===0){
        i++
        continue; // continue will jump back to the top
    }
    console.log(i);
    i++;
}

