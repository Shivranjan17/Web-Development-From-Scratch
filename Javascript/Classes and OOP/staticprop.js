class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    //static createId()
    createId(){
        return `123`
    }
}

const shivranjan = new user("shivranjan")
console.log(shivranjan.createId());


class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
console.log(iphone.createId());