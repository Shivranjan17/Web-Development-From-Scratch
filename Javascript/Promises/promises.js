//promises are object
const promiseOne = new Promise(function (resolve,reject){
    //do an async task
    //DB calls ,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})//see bluebird library


promiseOne.then(function(){
    console.log("Promise is consumed");
})



//promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


//promise 3
const promisethree = new  Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"Shivranjan17",email:"shivranjanpathak792@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

//promise 4


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username :"Shivranjan17",password : 123})
        }
        else{
            reject('Error : Something went wrong ')
        }
        
    },1000)
})

promisefour.then(()=>{
    console.log(user);
    return user.username

}).then((username)=> {
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))



//promise 5
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username :"Nachi",password : 123})
        }
        else{
            reject('Error : Something went wrong ')
        }
        
    },1000)

}); 

async function consumePromiseFive(){
    try{
    const response = await promisefive //response ke andar handle karte hai
    console.log(response);
    }catch(error){
    console.log(error);
    }
}//because of try catch error is handeled gracefully

consumePromiseFive()



//kind of project using async 

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()//await kyu ki response jo hai usko time lagta hai to convert so await lagana patda hai
//     console.log(data);
//     }catch(error){
//         console.group("E:",error)
//     }
// }
// getAllUsers()



//using .then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{//to handle above then we need to use this then
    console.log(data);
})
.catch((error)=> console.log(error))

