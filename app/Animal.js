//CLASSES
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  hello(){
    console.log(`Hi! I'm ${this.name} from the Animal Kingdom of Yabunda`);
  }
}

export default Animal;
//create an instance of class Animal called king
// let king = new Animal("simba", 5.3);
// console.log(king);
// king.hello();
