#1
let myVar = 'baNaNa';
function capitalizeFirstLetter(myVar){
  return myVar.charAt(0).toUpperCase() + myVar.slice(1).toLowerCase();
};
console.log(capitalizeFirstLetter(myVar));

#2
let height = parseFloat('0.6vh')*10;
let width = parseFloat('0.7vh')*10;
let result = 0;
result = 2*(height + width) / 10;
console.log(result+'vh');


#3
let merget = true;
let unmerget = !merget;
console.log(unmerget);
console.log(+merget);


#4
const a = 0;
const b = '0';
const c = null;
const d = false;
let e = (a == b) == (c == d);
console.log(e);
let h = a == b == c == d;
console.log(h);


#5
let k = 2;
{
 k = 2 * 3 * ++k === 2 * 3 * k++ ;
  console.log(k);
};
{
  k =  2 * 3 * k++ === 2 * 3 * ++k ;
  console.log(k);
};

#6
let world = 'Monday';
let kk = 0;
  {
  kk = world.length > 3 ? '25' : 'green' 
  };
  console.log(kk);

let bb = 0;
  {
   if (world.length > 3 ){
     bb = '25';
   }
   else {
     bb = 'green';
   }
 };
 console.log(bb);


let mm;
   switch (world.length > 3) {
   case true : 
   mm = '25';
   break;
   default:
   mm = 'green';
 };
  console.log(mm);
  
#7
let apples = 3;
let pears = -9;
let oranges = 7;
let color = 'red';
let check = true;

if (apples > oranges) {
  if (oranges < pears) 
  {
    console.log(!check);
  } 
  else {
      if (!color) {
          console.log(check);
      } else {
          console.log(!check);
}
  }
 }
else{ 
if(pears < apples){
  console.log(check);
}
else {
      if (!color) {
          console.log(check);
      } else {
          console.log(!check);
}
  }
 }
 
#8
for (let i = 80; i >= 4; i-=2){
    console.log(i);
    };

result = '';
    let j = 7;
    while (j <= 41) {
    result += j +'';
    j+=2
    };
    console.log(result); 
  




