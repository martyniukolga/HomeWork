#1 (4)
var dog = {}
console.log(dog);
dog.name = ‘Moochskctar’
console.log(dog);
dog[‘age’] = 500;
console.log(dog);
dog.sex = ‘male’;
console.log(dog);
dog.sex = ‘unknown’;
console.log(dog);
delete dog.age
console.log(dog);


#2 (4)
let obj = {};
function isEmpty(obj) {
   for (let key in obj) {
     return false;
   }
   return true;
 }
console.log(isEmpty(obj));
obj. pop = ‘:))’;
console.log(isEmpty(obj));


#3 (4)
const QTY = {
           Dogs: 100000,
           Cats: 1625476540,
           Bananas: 155330
 }
console.log(QTY.Dogs + QTY.Cats)
const QTY = {
    Dogs: 100000,
    Cats: 1625476540,
    Bananas: 155330
}
let sum = 0;
for (let prop in QTY) {
    sum += QTY[prop];
}
console.log(sum);

#4 (4)
function mumu(object) {
  let newMumu = {};
    for (let arg in object) {
        if (typeof (object[arg]) === 'number') {
           newMumu[arg] = object[arg] * 5;
        } 
        else {
          newMumu[arg] = object[arg];
        }
    } 
    return newMumu;
}
newMumu1 = {arg1:"test",arg2: 6}
console.log(mumu(newMumu1));

#5 (4)
function returnName() {
          return this.name
 }
let user1 = {
      name: 'Ivan',
      lastName: 'Sidorow',
      age: 99,
      workAt: 'enterprice',
      position: 'clown'
};
let user2 = {
      name: 'Oleg',
      lastName: 'Sidorow',
      age: 99,
      workAt: 'enterprice',
      position: 'clown'
};
user1.returnName = returnName;
console.log(user1.returnName());
user2.returnName = returnName;
console.log(user2.returnName());



#6 (4)
class Controller {
    constructor() {
        this.finished = false;
        this.done = 5;
        this.atempts = 44;
               this.getAtempts = function() {
            return this.atempts;
        }
        this.switchFinished = function() {
          this.finished = !this.finished
        }
    
    }
 
}
 let amazing = new Controller();
 amazing.switchFinished();
 let a = amazing.getAtempts();
 console.log(a);
 console.log(amazing.finished);
 
 
#7 (4)
const controller = require('./Controller.js');
const testImport = controller;
console.log(testImport);
import {Controller} from "./Controller.js";
const myController = new Controller;
console.log(myController);