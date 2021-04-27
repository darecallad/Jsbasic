//Factory and Constructor Functions

let address = createAddress('a','b',99999);
let address1 = new Address('d','e',99100);

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function createAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}

console.log(address1);
console.log(address);

