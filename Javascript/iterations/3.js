// for of

//["","",""]
//[{},{},{}]


const arr = [1,2,3,4,5]
for (const num of arr) {
//num = variable
//object is kis cheej pe loop lagana hai
//object ke andar bhi loop lagana hai
console.log(num);
}

const greetings = "hello world !!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}


//Maps
//maps are iterable object ko iterate karne ke dusre tarike hai
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")

console.log(map);


for (const [key,value] of map){
    console.log(key, ':-',value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA'
}

// for(const [key,value]of myObject){

// }

