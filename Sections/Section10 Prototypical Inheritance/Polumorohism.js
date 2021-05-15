// Polymorphism

function Group(nameGroup){
    this.nameGroup  = nameGroup;
}

Group.prototype.location = function(){
    console.log('Location');
}
Group.prototype.age = function(){
    console.log('age');
}

function extendParent(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

let g = new Group('AAA');
// g.location();

function Person(personName, nameGroup){
    this.personName = personName;
    Group.call(this,nameGroup);
}


//extend Parent
extendParent(Person, Group);

let p = new Person('Peter', 'AAA');
// p.location();
// console.log(p);

Person.prototype.age = function (){
    // call parent's method here if you dont inheritnace
    console.log('person age'); 
    
}

function Animal(){

}
extendParent(Animal,Group);

Animal.prototype.age = function(){
    console.log('Animal age');
}

let groups = [
    new Person(),
    new Animal(),
    new Person()
];

for(let group of groups){
    group.age();
}