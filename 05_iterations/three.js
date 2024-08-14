//for-of loop

//array specific loop
//["","",""] [{},{},{}]

const arr = [1,2,3,4,5];   //arr iterate
for (const num of arr) {
    console.log(num);
}

//in objects for of loop not working
// const obj = {
//     "name":"mane",
//     "time":"today"
// }
// for(const element of obj){
//     console.log(element);
// }

const greetings = "Hello world";     //string iterate
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France");
console.log(map);
for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(value);
}



