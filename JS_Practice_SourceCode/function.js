// function expression
const sum1 = function(a,b){
    return a + b;
}
// sum(1,2) // 3
// //arrow function
// sum1(1,2) // 3
//  const sum2 = (a,b) =>{
//     const log = a+b
// const result = log*5;
// return result;
//  }
// sum2(1,2) // 15

// //omit the return keyword
// const sum3 = (a,b) => (a + b)*5;
// sum3(1,2) // 15

//  // immidiatly invoked function expression
// (function(a,b){
//     console.log((a+b)*5);
// }   )(1,2) // 15

// // hoisting in function
// sum4(1,2) // 3
// function sum4(a,b){
//     return a + b;
// }
// / 1. Write a function that takes in a callback and calls the callback

// function within function
// function sum(a, b=2){
//     function sum2(){
//         return a+b;
//     }
//     return sum2(); 
// }
// console.log(sum(1,2)) // 3

// / 1. Write a function that takes in a callback and calls the callback

// function within function
function sum(a, b=2){
    function sum2(){
        return a+b;
    }
    return sum2(); 
}
console.log(sum(1,2)) // 3
// higher order function
function sum(a, b){ 
    return a+b;
}   
function higherOrderFunction(callback){ // outer function parameter value callback ==== sum(a,b)
    console.log(callback(1,12)); // inner function callback(1,2) ==== sum(1,2)
}
higherOrderFunction(sum) // 3
// control flow statement
let age = 14;
if(age>=21){
    console.log('true');
}
else if(age>=18){
    console.log('are bhakudda');
}
else{
    console.log("are bhakuda tu kuade asichu")
}
