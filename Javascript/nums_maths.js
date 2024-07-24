const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));//100.00

const otherNumber = 123.95623
console.log(otherNumber.toPrecision(3));//it gives the precised value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));

//*************************************************Maths*********************************************** */

console.log(Math);//apne aap me ek object


console.log(Math.abs(-4));//abs is absolute value which converts -ve value into positive
console.log(Math.ceil(4.5));//ceil is ceiling value which gives the nearest value of the(upper value)
console.log(Math.round(4.3))//it round offs the number
console.log(Math.floor(4.3))//it gives the floor value of the number(lowest value)
console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());//always comes in between 0 and 1
console.log((Math.random() * 10)+1);//it gives the random number between 0 and 10

console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log((Math.floor(Math.random()*(max-min+1)))+min);// important formula