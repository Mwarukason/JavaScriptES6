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

// function Vehicle(make, year) {
//   this.make = make;
//   this.year = year;
// }
//
// Vehicle.prototype.color;
// Vehicle.prototype.bio = function(){
//     return `A ${this.color} ${this.make} made in ${this.year}`;
// };
// let s = new Vehicle("Tesla", 2017);
// s.color = "black";
// console.log(s.bio());


//DATA STRUCTURES
//SET PART:
// let a = new Set();
// a.add(23);
// a.add(83);
// a.add({x:23,y:34});
// console.log(a);

// let nums = [8,99,78,34,23,32];
// let numSet = new Set(nums);
// console.log(numSet);
//
// for (let elem of numSet.values()){
//   console.log(elem);
// }

//check for unique characters on random string
// let char = 'asjza,mcncqoksccjswaurvbaschahefiufirvnshbh';
// let char_arr = char.split("");
// let char_set = new Set(char_arr);
// console.log(char_set);

//IMPLIMENTATION OF DATASTRUCTURE "has" & "Set"
// const contains = (word, letter) => {
//   let letters = word.split("");
//   let letters_set = new Set(letters);
//   return letters_set.has(letter);
//   // Todo create a set with the above 'letters' array
//   // Todo return whether the set has the 'letter'
// };
// let true_check = contains("12344", "7");
// console.log(true_check);
// let false_check = contains("north", "e");
// console.log(false_check);


//DATASTRUCTURE MAP()
// let a = new Map();
// let key_1 = "string key";
// let key_2 = {a: "key"};
// let key_3 = function(){};
//
// a.set(key_1, 'return value of string key');
// a.set(key_2, 'return value of object key');
// a.set(key_3, 'return value of function key');
// console.log(a);
//
// let numArr = [[1, 'one'], [2, 'two'], [3,'three']];
// let valMap = new Map(numArr);
// console.log(valMap);
//
// for(let [key,value] of valMap.entries()){
//   console.log(`${key} points to ${value}`);
// }
//
// let string = 'cmnczkdjsuriwtwoeipqpqlpqwsaswepoo';
// let letters = new Map();
// for (let i=0; i<string.length;i++){
//   let letter = string[i];
//   if (!letters.has(letter)) {//if not empty
//     letters.set(letter, 1);
//   }else{
//       letters.set(letter,letters.get(letter)+1);
//   }
// }
// console.log(letters);

// let string = 'xsuperxcalifragixlisticexpialidocious';
// const countLetter = (word, orig_letter) => {
//   // Todo Create a map called 'letters'
//   let letters = new Map();
//   for (let i=0; i<word.length; i++) {
//     let letter = word[i];
//     if (!letters.has(letter)) {
//       // Todo set the letter in the map to 1
//         letters.set(letter, 1);
//     } else {
//         letters.set(letter,letters.get(letter)+1);
//       // Todo update the value of letter in letters to its value + 1
//     }
//   }
//   return letters.get(orig_letter);
// };
// let a_count = countLetter(string, 'a');
// let x_count = countLetter(string, 'x');
// console.log(`a appear ${a_count} times in a string`);
// console.log(`x appear ${x_count} times in a string`);


//CLOSURES
// let call = () =>{
//   //secret cannot be accessed outside call function
//   let secret = 'ES6 Awesome like Crzy';
//   let revel = () => {
//     console.log(secret);
//   }
//     //revel();
//     return revel;
// }
// //call();closure
// let unveil = call();
// unveil();

//EXAMPLE addSurfix:
// const addSuffix =(x) => {
//   const concat = (y) => {
//     return y + x;
//   }
//   return concat;
// }
// //happyness
// let add_ness = addSuffix("ness");
// //console.log(add_ness);//returns function concat
// let h = add_ness("happy");
// console.log(h); //returns the cancatnated full value "happyness"
// //mwarukason.
// let add_son = addSuffix("son");
// let add_mwaruka = add_son("Mwaruka");
// console.log(add_mwaruka);

//EXAMPLE OF FUNCTION FUCTORY.
// const produc = (x) =>{
//   return y =>{
//     return y * x;
//   }
// }
// const produc = x => y => y * x;
// const add = x => y => y + x;
// // const add = (x) =>{
// //   return y =>{
// //     return y + x;
// //   }
// // }
// let addT = add(80);
// let double = addT(2);
// console.log(double);
// let mult = produc(20);
// let doub = mult(2);
// console.log(doub);

// const addFactory = x => y => y+x;
// //{
//   // Todo
//   // return an inner function with one parameter, y;
//   // the inner funcion returns x + y;
// //};
// const add50 = addFactory(50);
// const add100 = add50(100);
// console.log(add100);
// const add30 = addFactory(30);
// const add200 = add30(200);
// console.log(add200);


//BUDGET EXAMPLE: PRIVATE METHODS
// const budget = () => {
//   let balance =0;
//   let changeBal = (val) => {
//     return balance += val;
//   }
//   const deposit20 = () => changeBal(20);
//   const withdraw20 = () => changeBal(-20);
//   const check = () => balance;
//   return{
//         deposit20: deposit20,
//         withdraw20: withdraw20,
//         check:check
//       }
//   //return {deposit20, withdraw20,check}key &value re same
// }
//
// let walet = budget();
// walet.deposit20();
// walet.withdraw20();
// walet.deposit20();
// walet.deposit20();
// console.log(walet.check());


//GENERATORS:
// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
//
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// //console.log(letterGen.next().value);

// function* countMake(){
//   let count = 0;
//   while(count < 3){
//     yield count += 1;
//   }
// }
//
// let countGen = countMake();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);

// function* evens() {
//   let count = 0;
//   while (true) {
//     count +=2;
//     let reset = yield count;
//     if (reset) {
//       count = 0;
//     }
//   }
// }
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(true).value);
// console.log(sequence.next().value);

// const arrayIterator = (array) => {
//   let index = 0;
//
//   return{
//     next: () => {
//       if(index < array.length){
//         let next = array[index];
//         index +=1;
//         return next;
//       }
//     }
//   }
// }
// let bs = arrayIterator([32,54,32,23]);
// console.log(bs.next());
// console.log(bs.next());
// console.log(bs.next());
// console.log(bs.next());
// console.log(bs.next());

function* arrayIterator(){
  //yield arguments
  yield* arguments;
  // for(let arg of arguments){
  //   yield arg;
  // }
}

var bs = arrayIterator(2,5,3,4);
console.log(bs.next().value);
console.log(bs.next().value);
console.log(bs.next().value);
console.log(bs.next().value);
