// fetch('https://something.com').then().catch().finally() 

// promise is an object
// older promises libraries -> Q and BlueBird
// defualt is async , await but promises are good
// now the old libraires are itself integrated in javaScript and can be used directly

// promises reduces callback hell

//1st example -> basic promise
//promise creation
const promiseOne = new Promise(function(resolve,reject){
    //do an async task 
    //Db calls
    //cryptograph , network calls
    setTimeout(() => {
        // resolve();
        console.log("Async task completed");
        resolve();
    }, 1000);
});

//resolve always at end when task got completed

//promise consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})  //.then -> resolves




//2nd example -> no name only simple connected syntax
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("async 2 resolved");
});



//3rd example -> passing value in resolve and then using 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(params) {
        resolve({username:"Chai",email:"chai@example.com"}) //passing data through resolve
    },3000)
});

promiseThree.then(function(user){
    console.log(user);
})


//4th example ->
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"jitesh",password:"123"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 4000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {  //chaining upper . then return value comes to next . then
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected")); //always executes


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 5000)
})

//promise can calso be handled through async , await too
//in async await catch is not fully handled

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
} 
consumePromiseFive();



//fetch
async function getAllUsers() {
    try{
        const response = await fetch('https://api.github.com/users/niranjan-2024')
        // console.log(response);
        
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getAllUsers();

//same work as above of asyn await function
fetch('https://api.github.com/users/niranjan-2024')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err));

/*
fetch come to node js in 2022 only
why fetch api not included in nodejs -> fetch api is highly dependent on web api and abort controller
then they include all core apis in node js
fetch does fetching from network returns a promise
when we get error code eg 404 then its a response resolve because they specified error codes only not the error
fetch also had options object
fetch made a special priority queue (micro task queue , fast queue) in event loop of javascript thats why it executes faster  
web browser / native node
fetch -> two things -> one for data , on fullfillment array, on rejction array -> some relation with promise
					-> other for web network request -> handle apis  ->  network requests give errors 
initially data is empty
these array have function and affects data
this data is reponsible for global data response
*/