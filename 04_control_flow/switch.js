// switch (key) {
//     case value: 
//         break;
//     default:
//         break;
// }

const month = 3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("June");
        break;
    default:
        console.log("Default match");
        break
}

//if we dont use break then if case matches then it also check and run other cases except default, if no case matches then only default run

