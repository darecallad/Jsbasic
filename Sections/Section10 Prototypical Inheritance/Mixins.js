// Mixins

function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canWalk = {
    walk: function (){
        console.log('Walking');
    }
};

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canSwim = {
    swim: function(){
        console.log('swimming');
    }
};

function Person(){
}

mixin(Person, canSwim , canWalk, canEat);

const person = new Person();
console.log(person);

function GoldFish(){
}

mixin(GoldFish, canSwim, canEat);
const goldfish = new GoldFish();

console.log(goldfish);