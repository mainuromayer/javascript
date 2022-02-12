const products = [
  {name : 'iPhone 14', price: 70000},
  {name : 'samsung galaxy', price: 6000},
  {name : 'dell laptop', price: 50000},
  {name : 'lenove laptop yoga', price: 55000},
  {name : 'asus afsos laptop 1', price: 35000},
  {name : 'samsung smart watch', price: 4000},
  {name : 'apple watch', price: 9000},
  {name : 'plus one phone 4', price: 27000}
];

// for (product of products){
//   if(product.price < 5000){
//     break;
//   }
//   console.log(product);
// }
// console.log('after the loop');

for (product of products){
  if(product.price < 10000){
    continue;
  }
  console.log(product);
}