let a = 10;
const b = 20;
var c = 30;

console.table([a,b,c]);

//curly braces {} are scopes

//in if only block scope else everywhere is global scope
if(true){
    let a = 40;
    const b = 50;
    var c = 60; //scope of var is a problem
}

console.table([a,b,c]);

//scopes is different in node and inspect tools console

function one(){
    const username = "rahul"

    function two(){
        const wesbsite = "youtube"
        console.log(username);
        
    }

    // console.log(wesbsite);
    
    two();
}
one();

//function call by call stack 

if(true){
    const username = "jitesh";
    if(username === "jitesh"){
        const wesbsite = " youtube"
        console.log(username+wesbsite);
    }
    // console.log(wesbsite);
}
// console.log(username);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
console.log(addone(6)); //hoisting
function addone(num){
    return num+1;
}
addone(5);

// addTwo(6) // not possible
const addTwo = function(num){ //can be called as expression
    return num+2;
}
addTwo(5);
