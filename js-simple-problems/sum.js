/* 
// অ্যারে এর মধ্যে সবগুলো পজিশন এর নম্বর এবং যোগফল ঃ

const numbers = [44, 23, 34, 32, 54, 5, 78];

for(let i = 0; i < numbers.length; i++){
  const element = numbers[i];
  console.log(i, element);
} 
*/


/* 
const numbers = [44, 23, 34, 32, 54, 5, 78];

let sum = 0;
for(let i = 0; i < numbers.length; i++){            // Number এর Position - 0,1,2,3,...
  const element = numbers[i];                       // Number-Position এর Arrey-Number - 44, 23, 34,...

                                                    //  এখানে sum এর মান দেওয়া যাবে না। 
  sum = sum + element;
                                                    // sum এর যে মান বের হয়েছে, তার যোগফল change হবে না। পরবর্তী element এর সাথে যোগ হয়ে output দিয়ে দিবে।

}
console.log(sum);
 */

/* 
// function এর মাধ্যমে - অ্যারে এর মধ্যে সবগুলো Number এর যোগফল ঃ
function arreyTotal (numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const total = arreyTotal([32, 45, 67]);
console.log('arrey total', total);
 */

