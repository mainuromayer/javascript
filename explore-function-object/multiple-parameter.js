// function addTwoNumbers(number1, number2){
//   console.log(number1);
//   console.log(number2);
// }
// ======================================

function addTwoNumbers(number1, number2){
  console.log(number1, number2);
  var total = number1 + number2;
  return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value: ', result);



function multiplyTwoNumbers(num1, num2){
  var result = num1 * num2;
  return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

// biyog koro duita donkha
function mynasTwoNumbers (number1, number2){
  console.log(number1, number2);
  var total = number1 - number2;
  return total;
}
var result = mynasTwoNumbers(50, 30);
console.log('total before mynas: ', result);


// vagfol ber koro
function devidedTwoNumbers(firstNumber, secondNumber){
  console.log(firstNumber, secondNumber);
  var devided = firstNumber / secondNumber;
  return devided;
}
var last = devidedTwoNumbers(50, 2);
console.log('devided by: ',last);