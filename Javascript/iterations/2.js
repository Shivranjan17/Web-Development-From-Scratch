let index = 0

while (index<= 20) {
    console.log(`Value of index is ${index}`)
    index = index + 2
    
}

// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10
// Value of index is 12
// Value of index is 14
// Value of index is 16
// Value of index is 18
// Value of index is 20


let array = ['flash', 'batman','superman']
let arr = 0
while(arr<array.length) {
    console.log(`Value is ${array[arr]}`);
    // arr = arr + 1
    arr++;
}

//Value is flash
// Value is batman
// Value is superman


let score = 1
do{
console.log(`Score is ${score}`)
score++;
}while(score <= 10);