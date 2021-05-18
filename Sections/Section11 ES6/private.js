// Private member  using symbols

const _raduis = Symbol(); // every Symbol is diff
const _draw = Symbol();
class Circle{
    constructor(raduis){
        // this.raduis = raduis;
        this[_raduis] = raduis;
        // this is a public varible
        // some people using _ to declare private property
        [_draw]() = {
        }
    }
}