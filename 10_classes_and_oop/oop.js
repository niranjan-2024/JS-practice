const user = {
    username : "jitesh",
    loginCount: 8,
    signed: true,
    getUserDeails: function(){
        console.log("got user details from database");
        console.log(`username is ${this.username}`);
        console.log(this);
        return "hi";
    }
}

console.log(user.getUserDeails());

// const promise = new Promise(); // new runs constructor function for creating new instance every time to create new context
// const date = new Date();

function User(username,loginCount,isLoggedIn){
    this.username = username;  //variable = value to beassigned
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = () => {
        console.log(`hello ${this.username}`);
    }

    return this; // implicityly defined and returned by default too , can be avoided also , verbose code always
}

const user1 = new User("jitesh",12,true);
const user2 = new User("hitesh",11,false); //values overwrite creates a problem without new keyword
console.log(user1);
console.log(user2.constructor); // constructor property referes to self of fucntion  ,, instanceof javascript

//new keyword create empy object , instance empty 
//construcotr fucntion called due to new keyword , pack arguements
//inject values
//completes find values in fucntion



