// let myName = "shivranjan         "
// let myChannel = "chai      "

// console.log(myName.length)
// console.log(myName.trim().length)//low iq method 
// console.log(myName.truelength)



let myheroes = ["thor","spiderman"]
let heropower ={
    thor:"hammer",
    spiderman :"sling",


    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }


}
Object.prototype.shivranjan = function(){
    console.log(`Shivranjan is present in all objects !`);
}

Array.prototype.heyshiv = function(){
    console.log(`Shiv says Hello`);
}

heropower.shivranjan()

myheroes.shivranjan()
myheroes.heyshiv()//array to object(Array ke pass Power hai )
//heropower.heyshiv()//error//object to array

//Inheritance

const User = {
    name :"chai",
    email :"chai@google.com"

}
const Teacher = {
    makeVideo :true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shivranjan".trueLength()
"iceTea".trueLength()