function bringsSingara(taka){
  console.log('singara ar jonno desa', taka);
  console.log('Mama singara den');
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}
var money = 250;
var singara = bringsSingara(money);
console.log('Ai nen singara', singara);