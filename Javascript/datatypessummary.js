//  ********************* Primitive Datatypes *****************************

//7 Types : String , Number ,Boolean,null,undefined,Symbol,BigINt


//*********************** Non Primetive******************************* */

// Reference : Array,Objects, Functions
/* 
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


*/

const score = 100
const scoreValue = 100.3
const isScore = true
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false not equal
const BigNumber = 232332457345734573n



//Reference (Non Primitive)
//Array,objects,functions

const heroes = ["shaktiman ","naagraj","doga"];
let myobj = {
    name: "shaktiman",
    age: 100,
}//{} in between { } is the object

const myfunction = function()
{
    console.log("hello world");
}

console.log(typeof scoreValue);



// Type of Val                Result
/* 
    Undefined                 undefined
    null                       object
    Boolean                    boolean
    String                      string
    Object(native and does
    not implement [call])       object
    Object(native or host and 
    does not implement [call])     object

    Object(host and does
     not implement [call])       Implementation defined except may not be "undefined","boolean","number"or "string"

*/


//********************************************************************************************* */
//Stack Menomry (Primitive) 
//Heap Memory (Non Primitive)


let myYoutubename = "shivranjanpathak"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);//shivranjanpathak
console.log(anothername);//chaiaurcode

let user = {
    name: "shivranjanpathak",
    age: 100,
    upi : "user@ybl"
}

let user2 = user
user2.name = "Nachiket "
console.log(user.name);//shivranjanpathak
console.log(user2.name);//Nachiket
console.log(user2.upi);
console.log(user2.upi);