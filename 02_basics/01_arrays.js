const myArr = [0,1,2,3,4,5];
console.log(myArr[2]);

// in js we can store more than one type of datatype
// and they are resizable and of mixed data type and can be array in array
//arrays make shallow copy , copy share same references
//also other is deep copy which not have same reference

const myHeros = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);

console.log(myArr);
console.log(myArr2);

//Array methods

myArr2.push(6); //add at last
console.log(myArr2);
myArr2.pop();  //remove from last
console.log(myArr2);
myArr2.unshift(9);  //adds at first,     not gud operation because shift all values because not optimized
console.log(myArr2);
myArr2.shift(); //removes from first
console.log(myArr2);

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(4));
console.log(myArr2.indexOf(60));

const newArr = myArr2.join(); //convert to string comma separated
console.log(myArr2);
console.log(newArr);

//slice,splice

console.log("A ",myArr2);
const myn1 = myArr2.slice(1,3); // does not affect original array
console.log(myn1);
console.log("B ",myArr2);

const myn2 = myArr2.splice(1,3) // delete from original array , includes range
console.log(myn2);
console.log("C ",myArr2);