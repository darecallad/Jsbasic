// Exercise
// Create a Stack class

// private property
const _item = new WeakMap();

class Stack{
    constructor(){
        _item.set(this, []); // set item as array obj
    }

    // functions
    push(obj){ //push obj into array
        const item = _item.get(this);

        item.push(obj);
    }
    pop(){
        const item = _item.get(this);

        if(item.length === 0) throw new Error ('Stack is empty');
        return item.pop();
    }
    peek(){
        const item = _item.get(this);
        
        if(item.length === 0) throw new Error('Stack is empty');

        return item[item.length - 1];
    }
    get count(){
        return _item.get(this).length;
    }
}

const s = new Stack();
