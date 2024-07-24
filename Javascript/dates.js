//Dates 
//Date is also a object in javascript

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreateDate = new Date(2024 , 0 ,24)
console.log(myCreateDate.toDateString());
let create = new Date (2024,2,25,5,3)// YY MM DD TT
console.log(create.toLocaleString());

let create1 = new Date("02-22-2035")//MM DD YY
console.log(create1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(create1.getTime());// in mili sec

console.log(Math.floor(Date.now()/1000)); //to convet time into sec (interview question)


let newDate  = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//because it starts from 0 thats why +1
console.log(newDate.getDate());

//`$newDate.getDay() and the time is `
newDate.toLocaleString('default',{
    weekday:'long',
    
})