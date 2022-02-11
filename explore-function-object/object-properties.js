var computer = {
  price: 29000,
  storage: '15GB',
  color: 'silve',
  processor: 'intel i5'
};
// console.log(computer);

console.log(computer.processor);
// var computerPrice = computer.price;
// console.log(computerPrice);

// set a object property value
// computer.price = 22000;


  // different ways to set a value of an Object property
  // computer.price = 22000;
  // computer['price'] = 2300;
  // console.log(computer);

  // different ways to set a value of an Object property
  var priceProperty = 'price';
  computer.price = 22000;
  computer['price'] = 2300;
  computer[priceProperty] = 19000;

  console.log(computer);



