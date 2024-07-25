// how to singleton the object and declare it using constructor


const tinderUser = new Object();//Singleton Object
console.log(tinderUser);

// {}

const tinderUser1 ={};//non Singleton object
console.log(tinderUser1);

//{}


tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.isLoggedIn = false

console.log(tinderUser1);

//{ id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Shivranjan",
            lastname : "Pathak"
        }
    }
}

console.log(regularUser.fullname);

//{ userfullname: { firstname: 'Shivranjan', lastname: 'Pathak' } }

console.log(regularUser.fullname.userfullname.firstname);
//shivranjan

//console.log(regularUser.fullname?.userfullname.firstname); //? is to see if it is their or not


const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4: "d"}

const obj3 = {obj1,obj2}
console.log(obj3);
//array vala problem
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2)//{} is optional good practice
console.log(obj4);

//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj5 = {...obj1,...obj2}//best practice
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {id:1,name:"Shivranjan"},
    {id:2,name:"Pathak"},
    {id:3,name:"Shivranjan"},
    
];//array ke andar bohat sare objects 

users[1].id
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));

//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser1));
//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser1));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));

//true (kya uske pass ye property available hai ya nahi hai)