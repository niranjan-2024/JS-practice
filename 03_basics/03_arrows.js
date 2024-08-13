const user = {
    username:"suresh",
    price:999,
    welcomeMessage: function(){
        console.log(`Hello ${this.username}`);
        console.log(this); //current context
    }
}

user.welcomeMessage();
user.username = "sam"; //change context
user.welcomeMessage();

console.log(this); //empty object in node global object
//in inspect tools this referes to windows object but not in node

function chai(){
    let username = "nonu"
    console.log(this.username);// context works only in object but not in function
}
chai();

const chai2 = function(){
    let username = "nonu";
    console.log(this.username);
}
chai2();

//arrow function
const chai3 = () => {
    let username = "jitesh";
    console.log(this);
}
chai3();

//() => {}      basic arrow function syntax
const addTwo = (num1,num2) => {
    return num1 + num2;   //explicit
} 
const ans = addTwo(3,4);
console.log(ans);

// implicit return for one line arrow function
const addTwo2 = (num1,num2) => num1 + num2;
console.log(addTwo2(6,5));

const addTwo3 = (num1,num2) => (num1+num2); //return word is mandatory in curly braces
console.log(addTwo3(5,9));

const objectReturn = (num1,num2) => ({username:"hitesh"}) //to return object parenthesis is mandatory
console.log(objectReturn(5,0));









