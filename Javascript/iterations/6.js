// const coding = ["js","ruby","java","cpp","c","python"]

// coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);//undefined

//forEach loop does not return any value


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>4)
console.log(newNums);

//[ 5, 6, 7, 8, 9, 10 ]


const newNums1 = myNums.filter((num)=> {
    if(num>4){
        return;}
})
console.log(newNums);

//[ 5, 6, 7, 8, 9, 10 ]

const newNums2 =[]
myNums.forEach((num) =>{
    if(num>4){
        newNums2.push(num)
    }
})
console.log(newNums);

//[ 5, 6, 7, 8, 9, 10 ]


const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997
    },
    {
        title: "The Lord of the Rings",
        author:"xyz",
        year:1996
    },
    {
        title: "The Hunger Games",
        author:"XYZ",
        year:2008
    }
];
let userBooks = books.filter((bk)=>bk.author ==="XYZ")//way 1
userBooks = books.filter((bk)=>{ return bk.year >= 1995} )//way2 
console.log(userBooks);