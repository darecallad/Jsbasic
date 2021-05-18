// Static Method

class Circle{
   constructor(raduis){
       this.raduis = raduis;
   } 
   draw(){}

   static prase(str){
       const raduis = JSON.prase(str).raduis;
       return new Circle(raduis);
   }
}

const c = new Circle.prase('{"raduis}: 1');
console.log(c);