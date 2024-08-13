//ES6


class User {
    constructor(username,email,password){
        this.username = username ;
        this.email = email;
        this.password = password;

    }
    encryptPassword(){//Method declaration
        return `${this.password}abc`
    }
    changeusername(){//method declaration
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User ("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeusername());

//behind the Scene

function User2(username,email,password){
    this.username = username ;
    this.email = email;
    this.password = password;


}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`

}
User2.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const chai2 = new User2("chai2","chai2@gmail.com","1223")
console.log(chai2.encryptPassword());
console.log(chai2.changeusername());
