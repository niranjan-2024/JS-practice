//map

const nums = [1,2,3,4,5];
const newNums = nums.map((num) => num+10);   //adds 10 in every value , change in every value
console.log(newNums);

//chaining -> we can chaining any longer
//first we map every number multiply 10 then add 1 to every then filter by condition
const newNums2 = nums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num>40);
console.log(newNums2);


