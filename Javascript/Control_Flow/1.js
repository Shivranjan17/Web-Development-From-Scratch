// //if 
// if(condition){
//     //code to be executed if condition is true

// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn){

// }

//=== is used to check if condition is true and type is also same

const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");

if (balance<500){
    console.log("less than 500");
}
else if (balance <750)
{
    console.log("less than 750");
}
else {
    console.log("less than 1200");
}


//Real life example

const userLoggedIn = true
const debitCard =true

const loggedInfromGoogle = false
const loggedInfromGmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInfromGoogle || loggedInfromGmail){
    console.log("User logged in");
}