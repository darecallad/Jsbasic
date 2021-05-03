// Getters and Setters

const person = {
    firstName: 'Most',
    lastName: 'Chen',
    fulName(){
            return `${person.firstName} ${person.lastName}`
    }
};

console.log( person.firstName , ' ', person.lastName);
