let myName = "jitesh     ";
console.log(myName.length);
console.log(myName.trueLength);
console.log(myName.trim().length);

let myHeros = ["thor","spiderman"];
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: () => {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

//factory functions -> by default functions used to create
Object.prototype.nonu = () => {
    console.log("nonu is present in all objects");
}

heroPower.nonu();
myName.nonu();
myHeros.nonu();
//everything goes through objects so property or method injected in prototype of object can be accessed through
//all functions array and strings

//viceversa is not possible
Array.prototype.nonu2 = () => {
    console.log("nonu2 is present in only arrays");
}
myHeros.nonu2();
// heroPower.nonu2();




//inheritance
const user = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}
const teachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:teachingSupport
}
Teacher.__proto__ = user;


//Modern syntax - using moder properties
Object.setPrototypeOf(teachingSupport,Teacher);

let anotherUSername = "chaiAurCode                                ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUSername.trueLength();
"no".trueLength();