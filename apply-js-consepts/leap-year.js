function isLeapYear(year){
  if(year % 4 == 0){
    return true;
  }
  else{
    return false;
  }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);

const yourYear = 2024;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);