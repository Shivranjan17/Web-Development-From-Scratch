

function sayMyName (){
console.log("S");
console.log("h");
console.log("i");
console.log("v");
console.log("r");
console.log("a");
console.log("n");
console.log("j");
console.log("a");
console.log("n");

}
sayMyName()//execution of function
sayMyName // this is only function reference (ki vo function waha raheta hai)


function addTwoNumbers(number1,number2){//number1,number2 are parameters 
    console.log(number1 + number2);
}
addTwoNumbers(3,4)//argyuments

const result = addTwoNumbers(2,5)//we can store function inside variable
console.log("result :",result);//but the value

// 7
// result : undefined(but the value it has given so why undefined)


//the correct way
function addTwoNumbers1(number3,number4){
    let result1 = number3 + number4
    //or
    //return number3 + number4
    return result1;
}

const result1 = addTwoNumbers1(9,5)//we can store function inside variable
console.log("result :",result1);

//result : 14


function loginUserMessage(username){
    if(username === undefined)
        //or
    //if(!username) equalivalent
    {
        console.log("Please enter a username ");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shivu"));

//shivu just logged in

console.log(loginUserMessage(""));
//just logged in

console.log(loginUserMessage());
//undefined just logged in

