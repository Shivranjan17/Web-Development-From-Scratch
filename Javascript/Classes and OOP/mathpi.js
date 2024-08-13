

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
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}