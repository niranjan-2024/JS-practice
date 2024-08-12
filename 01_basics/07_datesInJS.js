let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let createdDate = new Date(2023,0,26,5,3);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

const newDate = new Date("01-14-2023");
console.log(newDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //milisecond value
console.log(newDate.getTime()); //compare miliseconds value while comparing
console.log(Math.floor(Date.now()/1000)); // to get in seconds value

let newDate2 = new Date();
console.log(newDate2.getMonth()+1); //month start from 0 january as 0
console.log(newDate2.getDay());

const temp = newDate2.toLocaleString('default',{
    weekday: "long",
});
console.log(temp);

