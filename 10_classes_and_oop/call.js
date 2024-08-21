function SetUsername(username){
    console.log("called");
    this.username = username;
}

function createUser(username,email,password){
    SetUsername.call(this, username); //explicityly call *******************

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@chai.com",123);
console.log(chai);
