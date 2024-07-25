//singleton(ye apne tarah ka ek hi object hai)it is made up of constructor
//Object.create (constructor method)



//object literals

const mySym = Symbol("key1")
const JsUser = { 
    name : "Shivranjan",
    "fullName":"Shivranjan Pathak",
    // mySym : "$$$",
    [mySym]: "$$$$",
    age :21,
    location : "pune",
    email :"shivranjanpathak792@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday","Saturday"]
}

//name .age ,location ,email, iLoggedIn,lastLogindays keywords are treated as a string in object
console.log(JsUser.email);//1st way
console.log(JsUser["email"]);//2nd way

console.log(JsUser.fullName);
// console.log(JsUser.mySym);//not treated as symbol it is treated as string
// console.log(typeof(JsUser.mySym));
// $$$
// string


console.log(JsUser[mySym]);//treated as symbol as we use [] this is the proper syntax
JsUser.email = "nachipathak@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "nachipathak792@gmail.com";//not allowed as it is already freezed
console.log(JsUser);


// {
//     name: 'Shivranjan',
//     fullName: 'Shivranjan Pathak',
//     age: 21,
//     location: 'pune',
//     email: 'nachipathak@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: '$$$$'//see this
//   }



JsUser.greeting = function(){
    console.log("Hello "+this.name+" "+this.fullName);
}

console.log(JsUser.greeting);//function return back(function ka reference aaya hai)

//[Function (anonymous)]

console.log(JsUser.greeting());//Hello Shivranjan Shivranjan Pathak

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(JsUser.greeting2());
//Hello Js User , Shivranjan