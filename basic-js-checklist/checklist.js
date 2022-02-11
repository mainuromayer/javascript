// 1. text- output - comment
var user = 'Sodor Uddin'
console.log(user);

//-----------------------------------

// 2. write 3 type variable (number, string, boolean)
const name = 'Sodor Uddin';
const age = 15;
const Passed = true;

//-----------------------------------

// 3. 2 type variable using (let, const)
let userName = 'sahab uddin';
userName = 'rahmat ullah';
console.log(userName);

const passYear = 2020;
/* passYear = 2021; // this value is not change , because it is const variable */
console.log(passYear);

//-----------------------------------

// 4. write 2 variable and simple math operation (+, -, *, /, %)
const num1 = 20;
const num2 = 5;

const totalSum = num1 + num2; // sum 
console.log(totalSum);

const totalSubstraction = num1 - num2; // substraction
console.log(totalSubstraction);

const totalProduct = num1 * num2; // substraction
console.log(totalProduct);

const Quotient = num1 / num2; // quotient
console.log(Quotient);

const Remainder = num1 % num2; // remainder
console.log(Remainder);

//-----------------------------------

// 5. comparison (<, >, ==, !=, <=, >=)

  /* ----- comparison(<) ----- এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট কিনা */
    let iPhonePrice = 70000;
    let iPhoneForMyBudget = 100000;

    if (iPhonePrice < iPhoneForMyBudget){
      console.log('Iphone dea pic tula futani marbo');
    }
    else{
      console.log('Iphone na nila bari cola jabo');
    }

  //......

  /* ----- comparison(>) ----- এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় কিনা */
    let samsungPrice = 100000;
    let samsungForMyBudget = 20000;

    if (samsungPrice > samsungForMyBudget){
      console.log('Samsung dea pic tula futani marbo');
    }
    else{
      console.log('Samsung na nila bari cola jabo');
    }

  //......

  /* ----- comparison(==) ----- == এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই সমান কিনা */
    let vivoPrice = 20000;
    let vivoForMyBudget = 20000;

    if (vivoPrice == vivoForMyBudget){
      console.log('Vivo dea pic tula futani marbo');
    }
    else{
      console.log('Vivo na nila bari cola jabo');
    }

  //......

  /* ----- comparison(!=) ----- এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই অসমান (ডিফারেন্ট বা আলাদা) কিনা */
    let huaweiPrice = 20000;
    let huaweiForMyBudget = 20000;

    if (vivoPrice != vivoForMyBudget){
      console.log('Huawei dea pic tula futani marbo');
    }
    else{
      console.log('Huawei na nila bari cola jabo');
    }

  //......

  /* ----- comparison(<=) ----- এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট বা সমান কিনা */
    let oppoPrice = 20000;
    let oppoForMyBudget = 10000;

    if (oppoPrice <= oppoForMyBudget){
      console.log('Oppo dea pic tula futani marbo');
    }
    else{
      console.log('Oppo na nila bari cola jabo');
    }

  //......

  /* ----- comparison(>=) ----- এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় বা সমান কিনা */
    let xiaomiPrice = 20000;
    let xiaomiForMyBudget = 10000;

    if (xiaomiPrice >= xiaomiForMyBudget){
      console.log('Xiaomi dea pic tula futani marbo');
    }
    else{
      console.log('Xiaomi na nila bari cola jabo');
    }

//-----------------------------------

// 6. two conditions. case-1: fullfill both consition(&&), case-2: fullfill atlist atlist one conditon(।।)

  /* ----- comparison(&&) ----- থাকার মানে দুইটা শর্তই পূরণ করতে হবে। একটা করবে আরেকটা করবে না। তাহলে হবে না। */
  var getJob = true;
  var sellary = 20000;

  if (getJob == true && sellary <= 20000) {
    console.log('This is true');
  }
  else {
    console.log('This is false');
  }

  //......

  /* ----- comparison(||) ----- থাকার মানে দুইটা শর্তের যেকোন একটা পূরণ করলেই হবে। তবে দুইটাই না করলে হবে না। */
  var getCompare = true;
  var Fixed = 20000;

  if (getCompare == true || Fixed < 20000) {
    console.log('This is Compare');
  }
  else {
    console.log('This is Fixed');
  }

  //......

//-----------------------------------

// 7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19

var i = 7;
while (i < 19) {
  i = i + 2;
  console.log(i);
}

//-----------------------------------

// 8. declare in arrey. number of elements. 4th position. add or remove element check weather specfic value exists in the arrey

var number = [{asif : 23}, {tareq : 43}, {mizan : 21}, {rohim : 68}, {sagor : 57}, {miraj : 85}, {samir : 74}]
number[1] = {tareq : 40};
// number.length = 2; // এটা মানে হচ্ছে break করে দেয়া - 2 position এর আগ পর্যন্ত break করে দেয়া
var removed = number.splice(2,3);
console.log(number);

//-----------------------------------

// 9. use any for loop to display every element of an arrey

var number = [{asif : 23}, {tareq : 43}, {mizan : 21}, {rohim : 68}, {sagor : 57}, {miraj : 85}, {samir : 74}]
for (let i = 0; i < number.length; i++) {
  console.log(number);
}

//-----------------------------------

// 10. you have an arrey of numbers. display only the numbers bigger then 80

var arreyNum = [34, 98, 54, 102, 97, 55, 36, 95];
for (let index = 0; index < arreyNum.length; index++) {
  const element = arreyNum[index];
  if (element > 80) {
    console.log('bigger then 80', element);
  }
  else if (element < 80) {
    console.log('smaller then 80', element);
  }
}

//-----------------------------------

// 11. write a function that takes three numbers and returns the multipicaton of the three numbers

const numberA = 30;
const numberB = 20;
const numberC = 20;

function Multiple(number1, number2, number3) {
  totalNumberMultipicaton = numberA * numberB * numberC;
  return totalNumberMultipicaton;
}
const totalMultiple = Multiple(numberA, numberB, numberC);
console.log(totalMultiple);

//-----------------------------------

// 12. declare and object change any of that object
const arreyNumber = [20, 28, 37, 34, 78];
arreyNumber[2] = 30;
console.log(arreyNumber);

//-----------------------------------

