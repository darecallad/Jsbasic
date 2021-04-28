//Finding Array
// Reference

const course = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

course.includes({id:1, name:'a'}); //false

course.find(function(course){  //findIndex
    return course.name === 'a';
});