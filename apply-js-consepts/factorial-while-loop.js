//  >----start---->  7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 - [while-loop]
// while loop reverse

// function getFactorial(number){
//   let factorial = 1;
//   let i = number;
//   while(i >= 1){
//     factorial= factorial * i;
//     i--;
//   }
//   return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);




//  >----start---->  7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 - [for-loop]
// while loop reverse

function getFactorial2(number){
  let factorial = 1;
  for(i = number; i >= 1; i--){
    factorial = factorial * i;
  }
  return factorial;
}

const myFactorial = getFactorial2(6);

console.log(myFactorial);