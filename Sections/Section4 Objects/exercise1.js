//Address Object

//street
//city
//zipCode
//showAddress(address)


let address = {
    street: '8888 abc ave',
    city: 'helloCity',
    zipCode: 99888
}


function showAddress(address){
    for(let element in address)
        console.log(element, address[element]);
};

showAddress(address);