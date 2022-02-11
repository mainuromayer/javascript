var tableLength = 12;
var tourDestination = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestination.indexOf('vutan');

var fourthDestination = tourDestination[3];

tourDestination[1] = 'srilonka';

tourDestination.push('London');
tourDestination.pop();

if(tourDestination[1]== 'nepal') {
  console.log('Phara ahare ahare');
}
else if(tourDestination[1] == 'chaina'){
  console.log('chaina tour ase jamuna');
}
else if(tourDestination.length == 4){
  console.log('aro taka ase aro besi ghurmu');
}
else{
  console.log('kothao jamuna basai thakmu ar mosha marmu');
}

var eggPrice = 32;
var myBudget = 32;
if(eggPrice <= myBudget){
  console.log('ami dim khamu');
}
if(eggPrice >= myBudget){
  console.log('lebu diya vat khabo');
}