const user = {
    username : "shiv",
    price : 999,

    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`);// iss scope me jitne bhi variable hai usko access karne ke liye mai this lagunga (current context ko refer karta hai)
        console.log(this)//in {} it refers to current context
    }

}

user.welcomeMessage();
//shiv,welcome to website
user.username ="sam"// context change
user.welcomeMessage();
//sam,welcome to website

console.log(this); //
// out is {} empty

function chai(){
    console.log(this);
}
chai();

/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
} */


const chai1 = function (){
    let username = "sss"
    console.log(this.username )
}
chai1()

//undefined

const chai2 =  () =>{//arrow function
    let username = "sss"
     console.log(this.username );//undefined
    console.log(this);//undefined
}
chai1()

const addtwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addtwo(3,4));

//7

const add2 = (num1,num2) => num1 + num2// this method is called Implicit Return when the function is of one line only
//const add2 = (num1,num2) => (num1 + num2) also in this way we can write it
console.log(add2(3,4)); // 7


//if we want to write object
const add3 = (num1,num2) =>({username : "shivranjan17"})
console.log(add3(3,4)); // { username: 'shivranjan17' }

// in this way we can use => arrow function for array
const myarray = [2,3,4,5,6]
myarray.forEach(function(){})
myarray.forEach(() =>{})
