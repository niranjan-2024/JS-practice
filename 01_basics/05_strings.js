const name = "nonu";
const repoCount = 50;
console.log(name+repoCount);

//use template literals for strings , string interpolation is this by backtics
console.log(`my name is ${name}`);

//to declare string general standard method
const gameName = new String("nonuname");
console.log(gameName);
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

//more methods
const newString = gameName.substring(0,4); //does not use negative value  start from 0 instead
console.log(newString);

const anotherString = gameName.slice(-8,4);// can have neagtive start from end
console.log(anotherString);

const newString1 = "   nonono    ";
console.log(newString1);
console.log(newString1.trim()); // removes start and ending spaces

const url = "https://nonu.com/nonu%20baburao"
console.log(url.replace('%20','-'));
console.log(url.includes("nonu2"));

const new2 = "nonu-nonu2-nonu3";
console.log(new2.split('-'));


