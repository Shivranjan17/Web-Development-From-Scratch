
//var c = 300
let a = 300
if(true){
    let a = 10
    const b =20
    console.log("Inner : ",a)
//output : Inner :  10
    
}

//output : 300
// console.log(b);

// for (let i = 0; i <array.length; i++) {
//     const element = array[i];
// }
// console.log(a);



// if ke andar jo bhi likha hai vo BLOCK SCOPE 
// if ke bahar jo likha hai vo hai GLOBAL SCOPE
//if we check scope in browser it is differt and if we check in node environment it is differt
// {} this is scope


//nested scope
function one(){
    const username = "shivranjan17"
    function two(){
        const website = "youtube"
        console.log(username)//see this


    }
    // console.log(website)//website ka scope yaha pe nahi hai thats why error
    two()
}
one()

//remember icecream example chota bade se mag sakta hai par bada chote se nahi
//likewise function two can access function one but one cannot 


if(true){
    const username = "shivu"
    if(username ==="shivu")
    {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);//website ka scope ya pe nahi hai thats why error
}
// console.log(username);//username ka scope yaha pe nahi hai thats why error




//-------------------------------interesting------------------------------------------------------------------------------------------------
function addone(num){
    return num +1
}
addone(5)
console.log(addone(5));
//funtion way 1

const addtwo = function(num){
    return num +2
}
addtwo(5)
console.log(addtwo(5));
//function way 2