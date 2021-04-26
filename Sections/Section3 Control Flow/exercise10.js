// Stars


function showStars(rows){
    let result = '';

    for(let i = 1 ; i <= rows ; i ++){
        result += '*';
        console.log(result);
    }
}

showStars(5);