//1.  variable
var favouriteBook = '4 hour work week';

//2.  arrey
var bookList = ['positioning,' 'hooked', 'start with way', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('Small Gaints');
bookList.pop();

//3.  conditionals
if(bookList[1] == 'hooked'){
  console.log('I am hooked.');
}
else{
  console.log(I am not hooked.);
}

//4.  loop
  // while loop
  var i = 0;  // loop variable
  while (i < 15){
    console.log(i);
    console.log('looping looping looping');
    i++;
  }

  // for loop
  for(var i = 0; i < 15; i++){
    console.log(i);
  }