// ES6 Modules

<sript type ="module" src = "index.js"></sript>  // module
import {Circle} from './circle.js';

const c = new Circle(10);


const _raduis = new WeakMap();

export class Circle{
    constructor(raduis){
        _raduis.set(this,raduis);
    }
}