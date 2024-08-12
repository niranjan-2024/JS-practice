//singleton
const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Samy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

//nesting can be done anytime
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "rahul",
            lastname: "sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {obj1,obj2};
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2); //target,source   give empty {}  push source in targe to get enumerated,
//other wise all gets in first itself
console.log(obj4);
console.log(obj1);

const obj5 = {...obj1,...obj2}; //mostly used and good way
console.log(obj5);

const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },{
        id:2,
        email:"abc@google.com"
    }
];
console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // return data type is array //important for projects
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //gives key value pairs
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //gives true or false


//destructuring
const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course //originalname of object property : our own name assigned
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"jitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

