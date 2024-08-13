//use for immediate databsae connection establishment while the file run immediate execute
//global scope se problem na ho, global scope pe depend na kare uska pollution affect na kare
console.log("iife");

//iife syntax (function definition)(call)
(function chai(){                                //named iife
    console.log("DB connected");
})();

(() => {                                         //no named, unnamed iife
    console.log("DB connected two");
})();

// chai();
//iife should be ended with semicolon if code environemnt not working

((name) => {                                     //call by parameter iife
    console.log(`DB connected to ${name}`);
})('nonu');  //call by arguement
