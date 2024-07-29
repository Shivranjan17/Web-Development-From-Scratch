function calculatecartprice(...num1){//... is rest operator
    return num1
}
console.log(calculatecartprice(200,300,500))

//[ 200, 300, 500 ]

function calculatecartprice(val1,val2,...num1){//... is rest operator
    return num1
}
console.log(calculatecartprice(200,300,500,2000))//200 goes in val1 300 goes in val2 and rest in num1 array

//[ 500, 2000 ]


const user = {
    name: 'John',
    age: 30,

}
function handObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
handObject(user);

// or
handObject({
    name: 'John',
    age: 30,
});

// //Username is John and age is 30
// Username is John and age is 30


const myNewArray =[200,400,100,600]
function returnsecondValue(getArray){
    return getArray[1]

}
console.log(returnsecondValue(myNewArray))//400
//or
console.log(returnsecondValue([200,400,500,100]));

//400
//400