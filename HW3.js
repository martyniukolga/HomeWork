#1 (3)
{
function multiplex() {
    let result = 1;
    if(!arguments.length) {
        return new Error('No Existitng Data')
    }
    for (let i=0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return new Error('Argument error');
        }        
        result *= arguments[i];
    }
    return result;
}
// console.log(multiplex(500, 23, 41, 2, 7, 5))
// console.log(multiplex(61, "hello", false, null));
// console.log(multiplex());
}
{
    const multiplex  = function () {
        let result = 1;
        if(!arguments.length) {
            return new Error('No Existitng Data')
        }
        for (let i=0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
                return new Error('Argument error');
            }        
            result *= arguments[i];
        }
        return result;
    }    
// console.log(multiplex(500, 23, 41, 2, 7, 5))
// console.log(multiplex(61, "hello", false, null));
// console.log(multiplex());

{
    const multiplex = (...args) => {
        const argums = [...args];
        let result = 1;
        if(!argums.length) {
            return new Error('No Existitng Data')
        }
        for (let i=0; i < argums.length; i++) {
            if (typeof argums[i] !== 'number') {
                return new Error('Argument error');
            }
            result *= argums[i];
        }
        return result;
    }
console.log(multiplex(500, 23, 41, 2, 7, 5))
console.log(multiplex(61, "hello", false, null));
console.log(multiplex());
    }

	
#2 (3)
let counter = 0;
function createCounter() {
        return function() {
        if ( typeof arguments[0] !== 'number' || arguments.length === 0 || arguments[1] === true) {
          return counter;
        } if(typeof arguments[0] == 'number') {
          return counter + arguments[0];
        }
        }
      };
  let counter1 = createCounter();
  let counter2 = createCounter();
  let counter3 = createCounter();
  console.log(counter1(5));
  console.log(counter1(21));
  console.log(counter1('hello world'));
  console.log(counter2(600));
  console.log(counter2(2));
  console.log(counter2(7,true));
  console.log(counter2(7,false));
  console.log(counter2(1));
  console.log(counter3());
  console.log(counter2());
  console.log(counter1());


  
#3 (3)
function findOne (){
let arg = arguments[0];
if (arguments[0].length){
  for (let i = 0; i < arg.length; i++){
    if (typeof (arg[i]) !== "number") {
    return Error("Array contain not a number") }
  }
}
  else if (!arguments[0].length)  {
return Error("Array is empty");
}
switch ( arguments[1]){
case 'min':
  return arguments[0] = Math.min.apply(null, arg);
  break;
case 'max':
  return arguments[0] = Math.max.apply(null, arg); 
  break;
case 'avg':
  let total = 0;
  for(let i = 0; i < arg.length; i++) 
    total += arg[i];{
return arg = total / arguments[0].length;
}
break;
default: return Error("Operation not found");
}
}
console.log(findOne([7,45,21,-2, 12, 11, 1], 'avg'));
console.log(findOne([-7,-4,-1,-2, -21, 11, 1], 'min'));
console.log(findOne([], 'max'));
console.log(findOne([true, false, null], 'avg'));
console.log(findOne([3], 'max'));
console.log(findOne([12], ''));


#4 (3)
function onDone(){
console.log("Successfull");
}
function onError(){
console.log("Failed");
}
const condition = (a = 58, b = 24) => ( a - b ) > 30;
function conditionManager(condition, onDone, onError ){
    if (arguments[0].length || arguments[1].length || arguments[2].length){
  for (let i = 0; i < arguments.length; i++){
    if (typeof (arguments[i]) !== "function") {
    return Error("All arguments are required and must be functions") 
    }
   }
    }
    else if (arguments[0]) {
        arguments[1]();
    } else(
        arguments[2]()); 
};
console.log(conditionManager(condition(200, 300), onDone, onError));
console.log(conditionManager(condition(), onDone, onError));
console.log(conditionManager(condition(200, 1000), onDone, onError));
console.log(conditionManager(" ", onDone, onError));
console.log(conditionManager(condition(2000, 1000), "rrrrr", onError));
console.log(conditionManager(condition(1, 1000), onDone, "0"));



  
#5(3)
const f = function(){return null}
console.log(typeof f.prototype)

#6 (3)
let testArray = [];
function arrController() {
    switch (arguments[0]){
    case 'add':
        testArray.push(arguments[1]);
        return testArray;
        break;
    case 'remove': 
        testArray = testArray.filter(val => val !== arguments[1]);
        return testArray;
        break;
    case 'clear':
        while (testArray.length > 0) {
            testArray.length = 0;
        }
        return testArray;
        break;
    case 'view': 
        return testArray;
        break;
    default: 
        return Error("operation is not available")
    }
}
console.log(arrController());
console.log(arrController("view"));
console.log(arrController("add", 0));
console.log(arrController("add", 'Hello'));
console.log(arrController("add", false));
console.log(arrController("add", 142));
console.log(arrController("remove",false));
console.log(arrController('clear'));


#7 (3)
const arr = [5, 7, 11, 13];
const arr2 = arr.map(
   item => item
);
arr2.push(21);
console.log(arr2);
console.log(arr);

#8(3)
var arr6 = [16, 31, 24, 7].pop(function(){return this});
console.log (arr6)


#9(3)
let arr7 = [1, 3, 5, 7, 11, 13, 3, 5, 7];
function arrReplaceValue(array,valueToChange,newValue) {
let value = 0;
   for(i=0; array.length >i ; i++){
   arr = array.indexOf(valueToChange,0);
    if (array[arr]== valueToChange) {
        value++;
    }
    if (arr !== 0) {
    array[arr]= newValue;}   }
   return arr;
}
console.log(arr7);
console.log(arrReplaceValue(arr7, 3, 8));
console.log(arr7);
console.log(arrReplaceValue(arr7, 7, 9));
console.log(arr7);

#10 (3)
let arr1100 = [‘ananas’, ‘banan’, ‘kiwi’];
let arr1200 = [‘gasoline’, ‘kerosene’, ‘chlorhexidine’]
const arr1300 = [
  ...arr1100,
  ...arr1200,
];
console.log(arr1300)