//Numbers
const score = 400;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);

const newBalance = 100;
console.log(balance.toFixed(3)); // used in ecommerce

const other = 23.8976;
console.log(other.toPrecision(3)); //very important and interesting property

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //comma US standards
console.log(hundreds.toLocaleString('en-IN')); //indian standard



//Maths
console.log(Math); //conatins all mathematical operations values and functions
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4,5));
console.log(Math.max(4,5));
console.log(Math.random()); //gives between 0 and 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); /***********impotant***********/ */




