
function largestElement(numbers){
  let max = numbers[0];         // numbers-position : 30 , 34, 24, .....
  for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];     //  numbers i : 1, 2, 3, 4, .....
    if(element > max)
    max = element;
  }
  return max;
}

const hightNumber = largestElement([32, 98, 65, 95, 29, 84])
console.log('height number is: ', hightNumber);


// -----------------------------------------------------------


function smallestElement(numbers){
  let min = numbers[0];         // numbers-position : 30 , 34, 24, .....
  for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];     //  numbers i : 1, 2, 3, 4, .....
    if(element < min)
    min = element;
  }
  return min;
}

const lowerNumber = smallestElement([32, 98, 65, 95, 29, 84])
console.log('lower number is: ', lowerNumber);


// -----------------------------------------------------------

// Task : Javascript find even number in arrey

// -----------------------------------------------------------

// Task : Javascript odd even number in arrey

// -----------------------------------------------------------
