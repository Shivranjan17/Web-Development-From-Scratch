const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : 'ruby',
    swift :'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["js", "rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")

// for(const key in map){
//     console.log(key)
// }

//iss ke andar bhi map ke upar iteration nahi kiya ja sakta


//for array - for of loop ]\ ke upar aur bhot bhi loop hai
//for object - for in loop