/*
let factorial = 1;
for(let i = 1; i <= 5; i++){
  console.log(i);
  factorial = factorial * i;
}
console.log(factorial);
*/



//  7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 <----start----< [for-loop]
function getFactorial(number){
  let factorial = 1;
  for(let i = 1; i <= number;  i++){
    factorial = factorial * i;
  }
  return factorial;
}

var firstFactorial = getFactorial(7);
console.log('Factorial of 7 is ', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is ', secondFactorial);


//  7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 <----start----< [while-loop]
/*
function getFactorial(number){
  let factorial = 1;
  let i = 1;
  while(i <= number){
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);
*/