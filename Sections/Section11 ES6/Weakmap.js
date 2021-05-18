// Private Members Using WeakMaps

//defind private varible

const _raduis = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(raduis){
        _raduis.set(this, raduis);
        _move.set(this, () => {
            console.log('move', this);
        });
    }
    
    draw(){
        _move.get(this);
        console.log('draw function');
    }
}