class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password.toUpperCase()}nonu`; 
    }
    set password(password){
        this._password = password.toUpperCase();   //avoiding race condition between constructor and setter to set first
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(email){
        this._email = email; 
    }
}

//both getter and setter need to be defined in pair

const jitesh = new User("jitesh@ai","abc");
console.log(jitesh.password);
console.log(jitesh.email);



