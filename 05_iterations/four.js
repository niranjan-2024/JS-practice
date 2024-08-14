//for-in loop

const obj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for(key in obj){
    console.log(key); //printing keys
}
for(key in obj){
    console.log(obj[key]); //printing values
}
for(key in obj){
    console.log(`${key} -> ${obj[key]}`);
}


const prog = ["js","rb","py"];
for(key in prog){
    console.log(`${key} -> ${prog[key]}`);
}

//map is not iterable by for in loop
// const map = new Map();
// map.set('IN',"India")
// map.set('USA',"America")
// map.set('Fr',"France");
// for(key in map){
//     console.log(key);
// }