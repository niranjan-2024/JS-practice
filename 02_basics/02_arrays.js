const marvel = ["thor","Ironman","spiderman"];
const dc = ["superman","flash","batman"];

marvel.push(dc); //pushed array in array // change in original array
console.log(marvel);
console.log(marvel[3][1]);

const dcNew = marvel.concat(dc); // returns new array
console.log(dcNew);
console.log(marvel);

const a1 = [1,2,3];
const a2 = [4,5,6];
const all = [...a1,...a2]; //spread operator
console.log(all);

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]; 
const usableAnother = another.flat(Infinity); // flat all array upto a depth
console.table([another,usableAnother]);

console.log(Array.isArray("nonu"));
console.log(Array.from("nonu"));
console.log(Array.from({name:"nonu"})); //gives empty array,, tells whetere of keys or values or what

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


