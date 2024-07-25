// Array


const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","ghatutkach"]
console.log(myArr[0])

const myArr2 = new Array(1,2,3,4)
//output
//PS C:\Users\SHIVRANJAN PATHAK\Desktop\Web Development Udemy\Javascript> node arrays.js
//0
//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

/*
PS C:\Users\SHIVRANJAN PATHAK\Desktop\Web Development Udemy\Javascript> node arrays.js
0
PS C:\Users\SHIVRANJAN PATHAK\Desktop\Web Development Udemy\Javascript> node arrays.js
0
[
  0, 1, 2, 3,
  4, 5, 6
]
PS C:\Users\SHIVRANJAN PATHAK\Desktop\Web Development Udemy\Javascript> node arrays.js
0
[
  0, 1, 2, 3,
  4, 5, 6, 7
]
PS C:\Users\SHIVRANJAN PATHAK\Desktop\Web Development Udemy\Javascript> node arrays.js
0
[
  0, 1, 2, 3,
  4, 5, 6
]
*/



myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

/* 
[
  9, 0, 1, 2,
  3, 4, 5, 6
]

[ 0, 1, 2, 3, 4, 5, 6 ] //for shift
*/

console.log(myArr.includes(9));
console.log(myArr.indexOf(9))

//false
//-1


const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

//0,1,2,3,4,5,6
//string


//********************slice,splice************ */

console.log("A",myArr);
const myn1 = myArr.slice(1 , 3)
console.log(myn1);
console.log("B",myArr);

const myn2  = myArr.splice(1 , 3)
console.log("C",myArr);
console.log(myn2);

/* 
A [
  0, 1, 2, 3,
  4, 5, 6
]
[ 1, 2 ]
B [
  0, 1, 2, 3,
  4, 5, 6
]
C [ 0, 4, 5, 6 ]
[ 1, 2, 3 ]

*/

const marvel_heros = ["Thor","IronMan","Hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
//output
//[ 'Thor', 'IronMan', 'Hulk', [ 'superman', 'flash', 'batman' ] ] array ke aandar array

//console.log(marvel_heros[3][1]) //3rd element 1 value -flash

const allHeros =marvel_heros.concat(dc_heros);
console.log(allHeros); //concat - join

//[ 'Thor', 'IronMan', 'Hulk', 'superman', 'flash', 'batman' ]

const all_newHeros = [...marvel_heros,...dc_heros]
console.log(all_newHeros); //spread operator - join (use this)

//[ 'Thor', 'IronMan', 'Hulk', 'superman', 'flash', 'batman' ]
const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]//array ke andar array ke andar array

const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);


// //[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Shivranjan"));

//false (kya ye array hai -nahi )

//conver it to array
console.log(Array.from("Shivranjan"));

// [
//   'S', 'h', 'i', 'v',
//   'r', 'a', 'n', 'j',
//   'a', 'n'
// ]

console.log(Array.from({name : "Shivranjan"}))//intersting
//[] empty array for printing array we need to specify that weather to calculate keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// [ 100, 200, 300 ]