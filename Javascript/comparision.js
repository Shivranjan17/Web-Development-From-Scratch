console.log(2>1);//true
console.log(2>=1);//trur
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true




console.log("2">1);//string compare with number//true
console.log("02">1);//trur



console.log(null>0);//false
console.log(null>=0);//trur
console.log(null==0);//false

//the reason is that an equality check == and comparisions <,>,>=,<= work differently
//the equality check == is a type coercion check
//the comparisions <,>,>=,<= are not type coercion checks
//Comprisions convert null to number,treating it as 0.
//Thats ehy null>= 0 is true and null > 0 is false


console.log(undefined == 0);
//undefined is not a number,so it is not converted to 0,so undefined == is false
console.log(undefined > 0);//false
console.log(undefined < 0);//false


//===

console.log("2"===2);//false === see 2 different datatypes