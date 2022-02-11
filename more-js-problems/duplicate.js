
/* // '45' = 0; '45' == 0; '45' != -1; 

const numbers = ['45', '46', '45', '23', '43', '45', '75', '50', '21', '33'];
const index = numbers.indexOf('45');
console.log(index); */


// --------------------------------------------------------
// remove duplicate arrey - string

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'balul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names){                 // names : abul, babul, .....
  const unique = [];                              //  defult value
  
  /*
    for(let i = 0; i < names. length; i++){         // number : 1, 2, 3, 4, .....
      const element = names[i];                     // names[i] : 1.abul, 2.babul, .....
      // console.log(element);
    } 


  // For of Loop
    for (const element of  names){
      console.log(element);
    }
  */

  for (const element of names){

    if(unique.indexOf(element) == -1){
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);







// remove duplicate arrey - number

const numbers = [12, 23, 34, 23, 33, 56, 34, 45, 22, 55];
function removeDuplicate(numbers){
  const unique = [];
  for (const element of numbers){
    if(unique.indexOf(element) == -1){
      unique.push(element);
    }
  }
  return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);

