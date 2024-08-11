// conversions
let score = null;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); //convert string into number datatype

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33avc" => NaN
//true => 1, false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true,0 => false
//"" => false
//"anyvalue" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//operations
let value = 3;
let negValue = -value;

console.log(negValue);
//+,-,*,**,/,% -> add,subtrace,multiply,power,divide,remainder

let str1 = "hello";
let str2 = "niranjan"

let str3 = str1 + str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);
console.log(+true);
console.log(+"");

let n1,n2,n3;
n1 = n2 = n3 = 2+2;
console.table([n1,n2,n3]);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
