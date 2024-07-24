const name = "Shivranjan"
const repoCount = 14


//console.log(name + repoCount + " Value");//outdated

console.log(`Hello my name is  ${name.toUpperCase()} and my repoCount is ${repoCount}`);//string interprition (modern way)  use ` `

const gameName = new String ('Nachiket792')
console.log(gameName[0]);
console.log(gameName.__protp__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)//cannot give negative value to substring
console.log(newString);


const anotherString = gameName.slice(-10,4)//we can give negative value in slice
console.log(anotherString);

const newString1 = "                    shivvvv             "
console.log(newString1);
console.log(newString1.trim());//trim removes the white space from the string


const url = "https://hitesh.com/shivranjan%20pathak"
console.log(url.replace('%20','_'));//it replaces
console.log(url.includes('sundar'))//it tells whather the url include sundar word or not


console.log(gameName.split(''));//it splits the string into array