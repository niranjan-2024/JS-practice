function sayMyName(){
    console.log("hello");
}

sayMyName(); //execution
sayMyName; //reference

//in javascript no need to give types
function addTwoNumbers(num1,num2){  //parameters
    console.log(num1+num2);
}
addTwoNumbers(5,"a"); //arguements

//when defined , call parameters num1 and num2 are parameters
//when called function, 5 and a are called arguements

function addTwoNumbers2(num1,num2){  //parameters
    let result = num1+num2;
    return result; //function ends at return not execution after that
    //return num1+num2    //best way
}

const result = addTwoNumbers2(4,5);
console.log(result);

function loginUserMEssage(username = "sam"){ //defined value
    // if(!username){
    //     console.log("please enter a username"); 
    //     return;
    // }
    return `${username} just logged in`;
}
const result2 = loginUserMEssage("lala");
console.log(result2);


function calculateCartPrice(val1,...num1){ //rest operator for passing multiple values
    return val1 + num1;
}
console.log(calculateCartPrice(200,400,600));


const user = {
    username:"jitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

handleObject({
    username:"nonu",
    price:0
})

const myNewArray = [0,1,2,3,4];
function returnSecondVal(myNewArray){
    return myNewArray[1];
}
console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([3,4,5]));


