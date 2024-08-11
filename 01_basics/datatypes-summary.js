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


// memories

//Stack,heap
//stack -> primitive -> copy
//heap -> non-primitive -> reference

let myYt = "nametoo";
let another = myYt;
another = "dododod"
console.log(another);
console.log(myYt);



//here heap memory reference of change in user 2 change in user 1 too dur to heap memory
let user1 = {
    email: "user@google.com",
    upi: "abc@ybi"
}

let user2 = user1;
user2.email = "user2@gmali.com";

console.log(user1);

