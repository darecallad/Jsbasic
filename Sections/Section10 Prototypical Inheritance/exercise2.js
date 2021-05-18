// Polumorphism

function HtmlElement(){
    this.click = function(){
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focued');
}

const e = new HtmlElement();

function HtmlSelectElement(items = []){
    this.addItem = function(element){
        if(!element)
            throw new Error (' please enter element to add.');
        this.items.push(element);
    }
    this.removeItem = function (element){
        if(array.length === 0)
            throw new Error('This is empty array.');
        this.items.splice(this.items.indexof(element),1);
    }   
    this.render = function(){
        return `
        <select>${this.items.map(element => `
           <option>${element}</option>`).join('')} 
        </select>`;
        //  use '' to join without having ',' in each string
    }
}


// function extend (Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// extend(HtmlSelectElement, HtmlElement);
// console.log(e);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// const s = new HtmlSelectElement();
// console.log(s);
// s.click();


const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http://')
];

for(let element of elements){
    console.log(element.render());
}


function HtmlImageElement(src){
    this.src = src;
    this.render = function(){
        return `<img src= " ${this.src}" /`; // ${}
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;