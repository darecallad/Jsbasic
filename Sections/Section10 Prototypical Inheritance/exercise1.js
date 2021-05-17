// Prototypical Inheritance

// Htmlelement  --> click , foucs prototype 
// htmlselectelement


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
    
}


// function extend (Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// extend(HtmlSelectElement, HtmlElement);
// console.log(e);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const s = new HtmlSelectElement();
console.log(s);
s.click();