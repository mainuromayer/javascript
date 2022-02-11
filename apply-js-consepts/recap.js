// variable
var time = '10.15';
var bookPrice = 150;
var isWhiteColor = false;

//arrey
var partners = ['sajid', 'mojid', 'najid', 'lajit'];
var elementCount = partners.length;
var nojidPosition = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

// conditionals
if(bookPrice < 120){
  console.log('I will buy this book');
}
else{
  console.log('Mama kisu discount denna');
}

// Loop
var i = 0;
while(i <= 17){
  // do some work
  i++;
}

for(var i = 0; i <= 17; i++){

}

//  Function
function isMoonUp(time){
  if(time >= 19 && time <= 5){
    return true
  }
  return false;
}

var moonStatus = isMoonUp(21);



//  let const


// value of variable could change
let price = 27;
price = 29;
price =31;

// value of the variable not change
const myName = 'Omayer';
console.log(myName);
myName = 22;