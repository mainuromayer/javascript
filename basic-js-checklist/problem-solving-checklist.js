// 1. conversiion - feetToInch
const feet = 1;
const inche = 12;
function feetToInch(inputFeet) {
  multiplyFeetToInch = feet * inche;
  return multiplyFeetToInch;
 }
 const totalFeet = feetToInch(feet);
 console.log(totalFeet);

 //------------------

 // 2. conversiion - centimeterToMeter
const centimeter = 1;
const meter = 0.01;
function centimeterToMeter(inputCentimeter) {
  multiplyCentimeterToMeter = centimeter * meter;
  return multiplyCentimeterToMeter;
}
const totalMeter = centimeterToMeter(centimeter);
console.log(totalMeter);

//------------------

// 3. calculation - pageRequerments 
// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

const book1 = 100;
const book2 = 200;
const book3 = 300;
function pageRequerments(no1book, no2book, no3book) {
  const bookTotal = book1 * book2 * book3;
  return bookTotal;
}
const bookTotalPages = pageRequerments(book1, book2, book3);
console.log(bookTotalPages);

//------------------

// 4. friends - biggest name of bestFriend

let bestFriend = ['arif', 'sahadat', 'sabbir', 'sharafat', 'farhan', 'sharafat'];

function friends(names){
  var name = names[0];
    var element = name.length;
    var bigger = name;
    for (var i = 1; i < names.length; i++) {
        var bigNames = names[i].length;
        if (bigNames > element) {
            bigger = names[i];
            element = bigNames;
        }
    }
    return bigger;
}
console.log(friends(bestFriend));

//------------------

// 5. number - biggest number in arrey

const numbers = [1, 2, 9, 4, 5, 6];
function largestNumber(value){
    let largest = numbers[0];
    for(let i = 0; i < value.length; i++){
      const element = value[i];
      if(element > largest){
          largest = element;
      }
    }
    return largest;
}
const bigNumber = largestNumber(numbers);
console.log(bigNumber);

//------

  /* const numbers = [1, 2, 9, 4, 5, 6];
  const largestNumber = (values) => {
    let height = 0;
    for(let i=0; i<values.length; i+=1){
      if (values[i] > height) {
        height = values[i];
      }
    }
    return height;
  }
  console.log(largestNumber(numbers)); */

  //------

  /* const numbers = [1, 2, 9, 4, 5, 6];
  console.log(Math.max(...numbers)); */

//------------------

// 6. will stop the loop if the arrey has any negative number
// onlyPositive
/* let arreyNumbers = [9, 8, -7, 8, 4]
function onlyPositive(numbers) {
  for (let i = 0; i < arreyNumbers.length; i++) {
    if (i >= 0)
    break;
  }
  console.log(i);
} */

//------------------

// 6. will stop the loop if the arrey has any negative number and returs all the positive number before the negative number
// onlyPositive

const arrNumber = [4, 12, 17, -5, 58, -10];
function positiveNumFinder(inputNum) {
  let newNumbers = [];
  for (const num of inputNum) {
    if (num >= 0) {
      newNumbers.push(num);
    }
    else if (num < 0) {
      break;
    }
  }
  return newNumbers;
}
const onlyPositive = positiveNumFinder(arrNumber);
console.log(onlyPositive);