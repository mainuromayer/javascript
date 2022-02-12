const products = [
  {name : 'iPhone 14', price: 70000},
  {name : 'samsung galaxy', price: 60000},
  {name : 'dell laptop', price: 50000},
  {name : 'lenove laptop yoga', price: 55000},
  {name : 'asus afsos laptop 1', price: 35000},
  {name : 'samsung smart watch', price: 7000},
  {name : 'apple watch', price: 20000},
  {name : 'plus one phone 4', price: 27000}
];


function searchProducts(products, searchText) {
  const result = [];
    for(const product of products){
      if(product.name.includes(searchText)){
        // console.log(product.name);
        result.push(product);
      }
    }
    return result;
}
const matched = searchProducts(products, 'watch');
console.log(matched);