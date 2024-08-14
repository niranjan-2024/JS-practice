//for-each loop

//forEach is a function injected itself in the array prototype can be used and accessesd with . dot

const coding = ["js","ruby","java","python","cpp"];
coding.forEach( function (item){  //this forEach takes a callback function and callback not take a name
    console.log(item); 
});

coding.forEach((key) => {
    console.log(key);
});

function printMe(item){
    console.log(item);
}
coding.forEach(printMe); //passing only reference of function // passing pre written function

coding.forEach((item,index,arr) => {  //for each has access of index and array too
    console.log(`${item} + ${index} + ${arr}`);
});

const myCoding = [
    {
        langName:"javascript",
        langFile:"js"
    },
    {
        langName:"java",
        langFile:"java"
    }
]
myCoding.forEach((item) => {
    console.log(item.langName);
});


