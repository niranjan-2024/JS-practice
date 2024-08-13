//for loop

// for (let i=0; i<=10; i++) {
//     if(i == 5){
//         console.log("5 is best number");
//     }
//     console.log(i);
// }

// for(let i=0;i<10;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop ${j}`);
//     }
// }

let myArray = ["flash","batman","superman"];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]); 
}

//break and continue

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log("detected 5");
        break;
    }
    console.log(`value of i is ${i}`);
}

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}

