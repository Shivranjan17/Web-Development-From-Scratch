const coding = ["js","ruby","java","cpp","c","python"]
coding.forEach( function (item) {
    //item is like a parameter we can give name anything
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})//for each using arrow function  //overall it is now a call back function


function printMe(item){
    console.log(item);
}
coding.forEach(printMe); //we can pass function name as a parameter to the forEach method we have to give only reference

coding.forEach( (item , index ,arr)=>{
    console.log(item,index,arr);
})



const myCoding = [
    {
        name: "javascript",
        year: 1995
    },
    {
        name: "ruby",
        year: 1995
    },
    {
        name: "java",
        year: 1995
    },
    {
        name: "c++",
        year: 1983
    },
    {
        name: "c",
        year: 1972
    }
]

//array ke andar objects hai {}
//database se jo har ek value aati hai vo database ke foprmat me hoti hai aur har ek value ek object hi hota hai 

myCoding.forEach((val)=>{
    console.log(val.name,val.year);
})

