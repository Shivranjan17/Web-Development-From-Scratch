// Immediatly Invoked Function Expressions (IIFE)

(function chai () {

    //named IIFE
    console.log(`DB Connected`);
})();  //; is important for exection of next function

//() () first parenthesis is "jaha pe hum function ki defination likhne wale hai " "second is execution call"

// IIFe is not only jo function immediatly execute ho jaye but also global scope ke pollution se problem hoti hai kai baar toh jo bhi vo global scope hai ya uske variable hai ya uske decleration hai vo hatene ke liye humne IIfe ka use kiya
// Their is problem due to global scope many times,we have thrown it to remove the pollution of variables or whatever the declaration is we have to use IIFE


(() => {

    //Simple IIFE since no name
    console.log(`DB connected two`);
})();


((name) => {
    console.log(`DB connected two ${name}`);
})('shivranjan')  //DB connected two shivranjan