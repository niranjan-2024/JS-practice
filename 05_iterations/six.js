//filter

let check = "";
const coding = ["js","c++","python"];
const values = coding.forEach((item) => {
    console.log(item);  
    check += item;
})
console.log(check);

const nums = [1,2,3,4,5];
console.log(nums);
const numsFiltered = nums.filter((item) => item>4);    // filter filters or returns based con condition return those whose value truely passes codnition
console.log(numsFiltered);
const nums2 = nums.filter((item) => {
    return item<3;   //if scope open then write return for explixit return
})
console.log(nums2);

//doing same filter thing with forEach but still longer with logic and syntax
const newNums = [];
nums.forEach((num) => {
    if(num>3){
        newNums.push(num);
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((book) => book.genre == 'History');
console.log(userBooks);

const userBooks2 = books.filter((bk) => {
    return bk.publish>2000
});
console.log(userBooks2);


const userBooks3 = books.filter((bk) => {
    return bk.publish>1995 && bk.genre == 'Science'
});
console.log(userBooks3);


