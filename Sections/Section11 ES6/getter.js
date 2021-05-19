//Getter and Setter

const _raduis = new WeakMap();


class Circle{
    constructor(raduis){
        _raduis.set(this, raduis);
    }

    get raduis(){
        return _raduis.get(this);
    }

    set raduis(value){
        if(value <=0) throw new Error('Raduis isnt vaild');
        
        _raduis.set(this,value);
    }
}
