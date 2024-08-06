const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal)//way 1


//for shopping relatedd app add items 

const myTotal1 = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal1)//way 2



const shoppingcart = [
    {name:"apple",price:1.00,quantity:2},
    {name:"banana",price:0.50,quantity:3},
    {name:"orange",price:1.50,quantity:1}

]
const pricetopay = shoppingcart.reduce((acc,item)=> acc + item.price,0)//acc = accumulator
console.log(pricetopay);

//3