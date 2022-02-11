// while(condition) {
//   console.log ('...');
// }

var  bottleColor = 'yellow';
var waterQuantity =1;
var isFull = false;

// arrey
var items = ['bottle', 'mug', 'papper', 'pen'];
items.indexOf('logens'); // -1
items.push('envelop');
items.push('watch');
items.pop();

// conditionals
if(items.length >= 4){
  console.log('you have too many stuff on your desk.');
}
else if(items.length == 4) {
  console.log('you only have one hali items');
}
else {
  console.log('Wow! you have a clean desk.');
}

