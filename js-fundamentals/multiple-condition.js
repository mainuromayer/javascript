var gotJob = false;
var moneySaved = 250000;
var hasFlat = false;
var hasHouse = true;

// if(gotJob == true && moneySaved > 200000){
//   console.log('cholo biya kora feli.');
// }
// else{
//   console.log('Tor kopale biya nai.')
// }

// if(gotJob == true && moneySaved > 200000 && hasFlat == true){
//   console.log('cholo biya kora feli.');
// }
// else{
//   console.log('Tor kopale biya nai.');
// }

// if(gotJob == true || moneySaved > 200000){
//   console.log('cholo biya kora feli.');
// }
// else{
//   console.log('Tor kopale biya nai.');
// }

if((gotJob == true && moneySaved > 200000) || hasHouse == true){
  console.log('cholo biya kora feli.');
}
else{
  console.log('Tor kopale biya nai.');
}