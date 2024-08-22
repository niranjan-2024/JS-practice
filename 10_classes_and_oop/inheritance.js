class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username); //calling constructor of parent class
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai","chai@microsoft.com",123);
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof teacher);
console.log(chai instanceof User);
console.log(teacher instanceof User);



