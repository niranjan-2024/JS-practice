class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ // stop access during instatiation
        return `123`;
    }
}

class teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());

const iphone = new teacher("iphone","i@apple.com");
iphone.logMe();
console.log(iphone.createId());
