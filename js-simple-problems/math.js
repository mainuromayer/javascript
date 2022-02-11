// absolute - all value positive
// const myNumber = -5;
// const output = Math.abs(myNumber);


// ceiling - upper nearest integer Number
// const myNumber = 2.639;
// const output = Math.ceil(myNumber);


// floor - down nearest integer Number
// const myNumber = 2.639;
// const output = Math.floor(myNumber);


// round - upper-down(0.5) nearest integer Number //.5 value is also upper
// const myNumber = 2.5;
// const output = Math.round(myNumber);


// random - 0 to 1 - any rendom number
// const myNumber = 2.5;
// const output = Math.random(myNumber);


// random - 0 to anyNumber - any rendom number
// const myNumber = 2.5;
// const output = Math.random(myNumber) * 10;
// const rounded = Math.floor(output);
// console.log(rounded);

for(let i = 0; i <= 20; i++){
  const myNumber = 2.5;
  const output = Math.random(myNumber) * 10;
  const rounded = Math.floor(output);
  console.log(rounded);
}
