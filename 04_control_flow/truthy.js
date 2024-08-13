const userEmail = "jitesh.air"
//empty string considered false
//but any other string considered true
//but empty array considered true
//falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values -> all except above -> "0", "False", " " space in string, [],{},emty array empty object,
// function(){} empty function

if (function(){}) {
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}

const userEmail2 = [];
if(userEmail2.length === 0){
    console.log("empty array");
}

const obj = {};
if(Object.keys(obj).length === 0){  //check empty object by converty keys into array
    console.log("empty object");    
}

//false == 0 -> true
//false == '' -> true
//0 == '' -> true

// || -> any one true
// && -> all true

// Nullish coalescing operator (??): null undefined
// used for database if not getting proper value
//done safety check itself
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);
//assign first value rether than null or undefined







