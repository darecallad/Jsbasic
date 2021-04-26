// Grade
// Get an array's grade and give avg result

const marks = [80,70,90];

function calculateGrade(marks){
    let sum = 0;

    for(let element of marks){
        sum += element;
    }
    let avg = sum / marks.length;
    displayGrade(avg);
}

function displayGrade(avg){
    if(avg < 60)
        console.log('Grade: F');
    else if(avg < 70)
        console.log('Grade: D');
    else if(avg < 80)
        console.log('Grade: C');
    else if(avg < 90)
        console.log('Grade: B');
    else
        console.log('Grade: A');
}

calculateGrade(marks);