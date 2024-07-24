let score = "33"//string

let score2 = 33//number
console.log(typeof score);//string
console.log(typeof (score));//string

let valueInNumber = Number(score);//convert string to number
console.log(typeof valueInNumber);//output = number
console.log( valueInNumber);//if number is not proper like 33abc it will give output as NaN(not a number)


// "33" => 33
//"33abc"=>NaN
// true => 1;false => 0


let isLoggedin = 1
let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin);//true

//for Boolean
//1=>true; 0=> false
//""=> false
//"hitesh"=> true



let somenumber = 33
let stringnumber =  String(somenumber)
console.log(typeof stringnumber);//string
console.log(stringnumber);



//****************************************Operations******************************************** */


let value = 3
let negValue = -value
console.log(negValue);//-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


let str1 = "hello"
let str2 = " world"

let str3 = str1 +str2
console.log(str3);//hello world


console.log("1"+2)//12 => 1 is string and 2 is added so 12
console.log(1+"2")//12 => 1 is added and 2 is string
console.log("1"+2 +3)//123 =>rule
console.log(1+2+"3")//33 since 1+2 is # and 3 is string


console.log((3+2)*5 %3);
console.log(+true);//1
console.log(true);//true
console.log(+"");//0

let gamecounter = 100
gamecounter++; //postfix
++gamecounter;//prefix
console.log(gamecounter);//101