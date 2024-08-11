//only primitive and non-primitive datypes
//dataypes are types on basis of how data stored and accessed

//Primitive
//Call by value -> copy access and change
//7 types : string, number, boolean, null, undefined, bigint, symbol

//Non-Primitive or Reference
//call by reference
//Array, Objects, Functions

const score = 100;
const scrore2 = 100.3;

const isLoggedIn = false;

const temperature = null;

let userEmail;  //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false -> symbol define uniqueness

// const bigNumber = 9999999999999999n

//non-primitive

//array
const heros = ["shaktiman","naagraj","doga"];

//object
let obj = {
    name:"rahul",
    age:22,
}

//function       as a variable
const myFunction = function(){
    console.log("Hello World");
};

console.log(typeof myFunction);
console.log(typeof heros);


