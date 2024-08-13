//code must be run on conditional basis

//if -> runs on true condition

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("Logged in");
}

//<,>,<=,>=,==,!=,===,!==

if(2 == "2"){
    console.log("executed");
}
if(2 !== "2"){
    console.log("executed");
}
const temp = 50;
if(temp<50){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}

const score = 200;
if(score>100){
    const power = "fly";
    console.log(`user power:${power}`);
}

const balance = 1000;
if(balance>500) console.log("test"); //implicit scope only one line , -> comma have same scope and here ; ends scope

//nesting

if(balance < 500){
    console.log("less than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && true && 2===2){
    console.log("allowed to buy courses");
}

const guest = true;
if(loggedInFromEmail || loggedInFromGoogle || guest){
    console.log("user logged in");
}



