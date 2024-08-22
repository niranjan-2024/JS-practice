//ES6

class User{
    constructor(username,email,password){
        this.username = username; //parameter
        this.email = email;
        this.password = password;
    }

    encryptPassword(){  //method
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai","chai@google.com",12345);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());



//behind the scene -> actual initial js implementation above is only possible by wrapper
function user(username,email,password){
    this.username = username; //parameter
    this.email = email;
    this.password = password;
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const tea = new user("tea","tea@gmail.com",123);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());


