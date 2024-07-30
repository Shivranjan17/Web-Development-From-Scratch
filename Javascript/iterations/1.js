//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5){
        console.log("5 is found");
    }
    console.log(element);

    
}


for (let i = 0; i <= 10; i++) {
console.log(`Outer Loop Value : ${i}`)
   for (let j = 0; j <= 10; j++) {
//console.log(`Inner loop Value : ${j} and inner loop ${i}`)
console.log( i + '*' + j + '=' + i*j);
   }
    
}

let array = ["flash ", "batman ", "Superman"]
console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}



// break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("5 is found");
        break;
    }
    console.log(`value of i is ${index}`);
    
}
//value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 is found

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("5 is found");
        continue;
    }
    console.log(`value of i is ${index}`);
    
}

//value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// 5 is found
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10
// value of i is 11
// value of i is 12
// value of i is 13
// value of i is 14
// value of i is 15
// value of i is 16
// value of i is 17
// value of i is 18
// value of i is 19
// value of i is 20