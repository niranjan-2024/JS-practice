//sigleton -> object from constructor     is        of single type
//declare with literals is not singleton

//object literals
//keys are always iteslf considered as string

const mySym = Symbol("key1");

const jsUser = {
    name:"nonu",
    "full name":"bot cot",
    [mySym]:"my key 1", //syntax of symbol as a key
    age:18,
    location:"jaipur",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
};
console.log(jsUser.name);
console.log(jsUser["name"]); //prefer square notation
console.log(jsUser["full name"]);

// using symbol as a key in object
console.log(jsUser[mySym]); 

jsUser.email = "abc@chatGpt.com";
console.log(jsUser);

//Object.freeze(jsUser); //no changes will propogate
jsUser.email = "microsoft";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello Js,${this.name}`);
}
console.log(jsUser.greeting2());

