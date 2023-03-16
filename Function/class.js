// let result = sum(1)(2)(3)();
// console.log(result)
// => 6
class Animal{
    name=''
    constructor(_name){
      this.name = _name;
    }
    setName(_name){
      this.name = _name;
    }
    getName(){
      return this.name + " hahahah";
    }
  }
  let dog = new Animal('haha')
  console.log(dog)
  
  // let dog = {
  //   name:"hello",
  //   setName:function(_name){
  //     this.name = _name;
  //   }
  // }
  
  // console.log(dog)
  // console.log(dog.name)
  // dog.setName('haha')
  // let cat = dog;
  // console.log(cat)
  // console.log(dog)
  
  