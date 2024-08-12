function SetUsername(username){
    //complex DB calls 
    this.username = username
    console.log("Called")
}

function CreateUser(username,email,password){

    //SetUsername(username)//ye sirf reference dia hai call nahi

    SetUsername.call(this ,username)//this se yaha current context pass hota hai matlab agar upar ka gayab ho jaye toh bhi mere saman aap hi hue 

    this.email = email
    this.password = password
}

const shiv = new CreateUser("Shiv","shiv@gmail.com","123")
console.log(shiv);

//call is current execution context which passes the other function