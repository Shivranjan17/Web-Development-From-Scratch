const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => {return num +10})
console.log(newNums);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]



//channing
const newNums1 = myNumbers
        .map((num)=> num * 10)
        .map((num) => {return num + 10})
        .filter((num) => num>=50)

console.log(newNums1);

// [
//     50,  60,  70, 80,
//     90, 100, 110
// ]