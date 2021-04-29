//Mapping an Array

const numbers = [1,2,3];


const filtered = numbers.filter(value => value >=0);

const item = filtered.map(n => '<li>' + n + '</li>');
console.log(item);

const html = '<ul>' + item.join('') + '</ul>';

console.log(html);

//chaining 
// const item = numbers.filter(n => n >=0)
        // .map(n => ({value : n}));


// const filtered = numbers.filter(n => n >=0);

// const item = filtered.map(n => ({value: n}));

const result = numbers.filter(n => n >=0)
    .map(n => ({value: n}))
    .filter( obj => obj.value > 1);

console.log(result);