//Object Equality

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');

function areEqual(address1,address2){
    let isEqual = true;

    for(let element in address1, address2){
        if(address1[element] !== address2[element])
            isEqual = false;
    }
    return isEqual;
}

function areSame(address1,address2){
    return address1 === address2;
}

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));