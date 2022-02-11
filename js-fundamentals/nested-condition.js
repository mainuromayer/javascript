var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;

// if (danishPrice < myBudget) {
//   console.log('danish kyeye danish jabo');
// }
// else if (butterBreadPrice < myBudget) {
//   console.log('Buter bon diye cha khamu');
// }
// else if (toastBiscuitPrice < myBudget) {
//   console.log('toast biscuit khamu');
// }

// else {
//   console.log('Batasha diya cha khamu');
// }

if (danishPrice < myBudget) {
  if(packedWell == true) {
    console.log('danish khabo');
  }
  else{
      console.log('danish khamu na');
  }
}