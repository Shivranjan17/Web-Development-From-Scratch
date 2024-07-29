const userEmail = "shivranjanpathak@gmail.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("don't have the user email")
}

const userEmail1 = ""
if(userEmail1){
    console.log("Got user email");
}
else{
    console.log("don't have the user email")
}

//Got user email
// don't have the user email

//falsy values
// false, 0 ,-0,BigInt 0n ,"",null,undefined,NaN

//truth value
//"0",'false' since it is inside string," ",[],{},function(){}

//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10//5
// val1 = undefined ?? 15 //15
//val1 = null ?? 10 ?? 20  //10

console.log(val1);


//terniary Operator
// condition ? true : false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");