//reduce

//first time accumulator value is intital value then reduces on whole array and
// stores each time in accumulator and perform operation on current value to reduce like sum of all

const nums = [1,2,3,4,5];
let initial = 0;
let sumWithInitial = nums.reduce((acc,curr) => {
    console.log(`acc:${acc} + curr:${curr}`);
    return acc+curr;
},initial);   // this initial value sotre in accumulator first time
console.log(sumWithInitial);


const total = nums.reduce((a,c) => a+c,0);  //short form
console.log(total);

const shopCart = [
    {
        itemname:"js",
        price:2999
    },
    {
        itemname:"python",
        price:3001
    }
]
const totalCart = shopCart.reduce((acc,item) => acc+item.price,0);
console.log(totalCart);
