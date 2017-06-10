// let limit = 100;
// limit += 100;
// console.log(limit);

//constant is read-only variable
// const limit =100;
// limit += 100;
// console.log(limit);

// const emails = ['abc@gmail.com','dcs@gmail.com'];
// emails.push('jshd@gmail.com','scdf@gmail.com','scdff@gmail.com');
// console.log(emails);

//"let & const" create a local & glabal than "var"
// const limit = 200;
// {
//   const limit = 100;
//   console.log(limit);
// }
// console.log(limit);

// function hello(){
//   let msg = "hello";
//   console.log(msg);
// }
// function greeting(){
//   let msg = "How are you";
//   console.log(msg);
// }
// hello();
// greeting();

// //template literals:
// let a = `birthday`;
// let greeting = `happy ${a}`;
// console.log(greeting);

// //DestructiveSpread{...}
// let a =[20,30,40];
// let b = [10,...a,50];
// console.log(b);

//RestParameters
// function collection(...a){
//   console.log(a);
// }
//  collection('Amri','Aqilah','sihaba','shabani');

//DestructuringArray
// let animals = ["simba","zazu","ed"];
// let [lion, bird] = animals;
// console.log(lion, bird);

//DestructuringObject
// let king = {name:'mwaruka', kids:2};
// let {name, kids} = king;
// console.log(name,kids);

// setTimeout(function(){
//   console.log("heloooooo");
// }, 2000);
//
// //ARROR FUNCTIONS ANNONIMOUS:
// setTimeout(() => {
//   console.log("heloooooo");
// }, 2000);
//
// let cheer = () => {
//   console.log("heloooooo");
// }
// cheer();

// //firstApproach MAP
// let values = [10,20,30];
// let double = (n) => {
//   return n*2;
// }
// let doubled = values.map(double);
// console.log(doubled);
// //SECONDApproach MAP
// let doubled2 = values.map((n) => {
//   return n*2;
// });
// console.log(doubled);
// //THIRDApproach MAP
// let doubled3 = values.map((n) => n*2);
// console.log(doubled);

//FILTER METHOD:
// let points = [7,22,54,5,20,12,9,15];
// let highScore = points.filter((n) => n < 15)
// console.log(highScore);

// let b = `heloo ${"yes".repeat(10)}`;
// console.log(b);
// console.log("butterfly".startsWith("fly"));
// console.log("butterfly".endsWith("fly"));
// console.log("butterfly".includes("fly"));

// const addToCart = (item, number) =>{
//   //return Number.isFinite(number);
//   return Number.isSafeInteger(number);
// }
// console.log(addToCart('shirt',Math.pow(5,54)));

//MODULES
// import { owners, total } from './exsample';
// import { add } from './math';
// import multiply from './math';
//
// console.log(owners, total);
// console.log(add(10,22));
// console.log(multiply(10,50));

// //import the class Animal from index Animal
// import Animal from './Animal';
//
// //INHERITANCES CLASS ANIMA:
// class Punda extends Animal {
//   constructor(name, height,color){
//     super(name,height);
//     this.color = color;
//   }
//   hello(){
//     console.log(`Hi I'm ${this.name} from Pundamilia Clan`);
//   }
// }
// let ndama = new Punda("Punda milia", 4.3, "Yellow");
// console.log(ndama);
// ndama.hello();

//creating static methods
// class Calculator {
//   //static methods allowed to be access
//   //right away without instance the class
//   static multiply(a,b){
//     return a*b
//   }
// }
// let a = Calculator.multiply(5,8);
// console.log(a);

//example of class Instrument
// class Instrument {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
// }
// class Guitar extends Instrument {
//   describe() {
//     return `Im a ${this.name} from the ${this.type} family`;// TODO fill this line
//   }
// }
// let fender = new Guitar("Fender", "strings");
// console.log(fender.describe());

//Object-Oriented Programming / Prototypes
// function Wizard(name,house,pet){
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//
//   this.greet = () => `I'm ${this.name} from ${this.house}`
// }
//
// //can create a properties by just
// Wizard.prototype.use_name;
// //can also create a function, no use of Arrow function:
// Wizard.prototype.info = function(){
//   return `I have a ${this.pet} named ${this.use_name}`
// };
//
// let juma = new Wizard("Jembe Mtu", "Sheraton", "Paka");
// juma.use_name = "mackjay";
// console.log(juma);
// console.log(juma.info());

//todo on prototype
// * add a 'color' field to the prototype
// * add a 'bio' method that *returns*:
//      A ${this.color} ${this.make} made in ${this.year}.

function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function(){
    return `A ${this.color} ${this.make} made in ${this.year}`;
};
let s = new Vehicle("Tesla", 2017);
s.color = "black";
console.log(s.bio());
