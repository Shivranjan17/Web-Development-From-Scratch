

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);//no change

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

//Output cannot be change
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
const chai = {
    name : 'ginger chai',
    price :250,
    isAvailable:true,

    orderChai : function(){
        console.log("chai nahi bani ")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,//false lagaya to name print nahi hoga
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {// Object is by default not iterable to make it iterable make use of Object.entries
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}