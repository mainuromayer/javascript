const business = 450;
const minister = 350;
const army = 600;

/* // Basic Way
if (business > minister){
  console.log('Business Person ar pola is bigger');
}
else{
  console.log('Minister ar pola is bigger');
}
*/

/* 2nd way
if (business > minister && business > army){
  console.log('Business Person ar pola is bigger');
}
else if (minister > business && minister > army){
  console.log('Minister ar pola is bigger');
}
else(army > business && army > minister){
  console.log('Army is bigger');
}
*/

/* // 3rd way
var max = Math.max(business, minister, army);
console.log(max);
*/


function findLargest(first, second){
  if(first > second){
    return first;
  }
  else {
    return second;
  }
}

const larger = findLargest(354, 241);
console.log('largest is ', largest);



// Task : number find biggest number
// Task : number find smallest number