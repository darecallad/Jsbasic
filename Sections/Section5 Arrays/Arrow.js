//Arrow Function

const courses = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

courses.find(course => course.name === 'a');


const people = [
    {name: 'John', age : 18},
    {name: 'Mosh', age: 22}
];

people.find(person => person.name ==='John');


const classes = [
    {course: 19923,
      name: 'PE',
      location :'C202'}
];

classes.find(course => course.name === 'PE');