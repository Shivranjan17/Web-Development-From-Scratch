//Object Literals
const user = {
    username:"Shivranjan",
    logincount : 8,
    signedIn : true,

    getUserDetails : function(){
            //console.log("Got user details from database");
            //console.log(`Username : ${this.username}`)
            console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


// Constructor Function

//const promiseone = new Promise()
//const date = new Date()

function User(username,logincount,isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this//Implicitely defined
}

const userone =  new User("Shivranjan",12,true)
const usertwo =  new User("shivu",12,false)
console.log(userone.constructor);
console.log(usertwo);

//Constructor Property - Is a reference to self

//see for instanceof