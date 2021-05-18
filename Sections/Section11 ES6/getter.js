//Getter and Setter

const _raduis = new WeakMap();


class Circle{
    constructor(raduis){
        _raduis.set(this,raduis);
    }
    
    get raduis(){
        return _raduis.get(this);
    }

    set raduis(value){
        _raduis.set(this, value);
    }
}