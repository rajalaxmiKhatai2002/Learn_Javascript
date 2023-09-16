// console.log("welcome to javascript world");
//writing the first code 
//variables in javascript
// var myVariable = "Hello, World!";//var is a keywordand myvariable is variale name 
// console.log(myVariable); //o/p:hello world
//using the second variable type let
// let myVariable = "Hello, World!";
// console.log(myVariable);    //output of second variale type
//another type of variale that is let
// let myVariable = "Hello, World!";
// console.log(myVariable);    


//difference between these three types of variables:------
// let myNumber = 42; 
// console.log(myNumber);// Number
// let myString = "Hello";
// console.log(myString); // String
// let myBoolean = true; // Boolean
// console.log(myBoolean);
//array example:------
// Array = [25,67,"barsha",8];
// console.log(Array);
// //example of objects:---
// var x = 5;  //here var is a keyword and 5 is the value
//a variable also can be a singl chraacter or ,ulti character it also can be a alphanumeric character
// let arra1 = ['value',764,"anurag","rajalaxmi"];
// console.log(arra1[2][3]);   //it will provide us the foruth latter of the third array if we count the arrray values in starting with 1 respectively.
//operator in js
// let value1 = 25;
// // let value2 = 5;
// let value2 = "5"    //if we add string then what the result an dwhat the type of the result
// let result = value1+value2;
// console.log(typeof result); //o/p:225 and type is string
// let mrp = 1453;
// let discript = 234;
// console.log("the mrp of item is: " +mrp);
// let DPrice = (mrp - discript) / mrp*100;
// console.log("the descriptive " +DPrice);
//type casting in js.......
// let myvar;
// myvar = String(34);
// console.log(myvar,(typeof myvar));
//typecasting in javascript
// let num = 10;
// let str = "20";
// let result = num + str; // Result: "1020"
// console.log(result);
//To convert a value to a Number data type, you can use the Number() function or the unary plus operator (+).
// let stri = "10";
// let num1 = Number(stri); // Result: 10
// console.log(num1);

// let str = "20";
// let num1 = +str; // Result: 20
// console.log(num1);
//To convert a value to a String data type, you can use the String() function or the .toString() method.
// let num = 10;
// let str = String(num); // Result: "10"
// console.log( typeof str);

// let num = 20;
// let str = num.toString(); // Result: "20"
// JavaScript also provides functions like parseInt() and parseFloat() to convert strings to integers or floating-point numbers, respectively
// let str = "10.5";
// let num = parseInt(str); // Result: 10.5
// console.log(num);
// console.log( typeof num);
//converting array to object
// const array = ['apple', 'banana', 'orange'];

// // Convert array to object
// const object = Object.assign({}, array);    //{} this is used for target object that means source object to target object

// console.log(object);
//converting nestef darray to object in js
// const nestedArray = [
//     ['name', 'rajalaxmi khatai'],
//     ['rollno', '83'],
//     ['branch', 'mca']
//   ];
  
//   const result = nestedArray.reduce((obj, [key, value]) => {obj[key] = value;return obj; }, {});
  
//   console.log(result);

//COPY VIA VALUE
// let x = 5;
// let y = x; // Copying the value of x to y

// x = 10; // Modifying x

// console.log(x); // Output: 10
// console.log(y); // Output: 5 (y remains unchanged)
// In this case, x and y each have their own separate copies of the value 5. Changing the value of x does not affect the value of y.
//copy via reference
// let arr1 = [1, 2, 3];
// let arr2 = arr1; // Copying the reference of arr1 to arr2

// arr1.push(4); // Modifying arr1

// console.log(typeof arr1); // Output: [1, 2, 3, 4]
// console.log(arr2); // Output: [1, 2, 3, 4] (both arr1 and arr2 reflect the change)
//shallow copy 
// const originalObj = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'gaming'],
//   };
  
//   const shallowCopy = Object.assign({}, originalObj);
  
//   // Modifying the shallow copy
//   shallowCopy.name = 'Jane';
//   shallowCopy.hobbies.push('painting');
  
//   console.log(originalObj); // { name: 'John', age: 30, hobbies: ['reading', 'gaming', 'painting'] }
//   console.log(shallowCopy); // { name: 'Jane', age: 30, hobbies: ['reading', 'gaming', 'painting'] }
//hoisting in js
// greet()
// function greet(){
//     console.log("good morning");
// }
//hoisting in js
//variable hoisting
// console.log(x); // Output: undefined
// const x = 10;

//variable hoisting
// add();
// function add(){
//     console.log("wellcome to js variable hoisting");
// }

// let hoisting = function vhoisting(){
//     console.log("welcome to js");
// }
// vhoisting();

// const number = 5;

// if (number  === 5) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }
// var number = 9;

// if (number % 2 === 0) {
//   console.log("The number is even");
// } else if (number % 3 === 0) {
//   console.log("The number is divisible by 3");
// } else {
//   console.log("The number is odd");
// }
//omit function

// let val1 = 10
// let val2 = 20
// function addnum(num1,num2){
//     let total = num1+num2
//     return total
// }
// let result1 = addnum(val1,val2)
// let result2 = addnum(45,76)
// var n = 2;
// function square(name){
//     var ans = num*num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);
// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
// }
// console.log(this.x);
// var a = NaN;
// if(a===undefined){
//     console.log("it is a undefined");
// }
// else{
//     console.log("it is not undefined");
// }
  
//copywithin()
// const arr13 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr13.copyWithin(0, 3, 4)); 


// const arr13 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr13.copyWithin(0, 3)); 

// const arr23 = ['a', 'b', 'c'];
// const iterator1 = arr23.entries();
// console.log(iterator1.next().value);

// const arr24 = ['a', 'b', 'c',3423];
// const iterator2 = arr24.entries();
// console.log(iterator2.next().value); 
// console.log(iterator2.next().value); 
// console.log(iterator2.next().value);
// console.log(iterator2.next().value);

// Example 1
// const arr28 = [1, 2, 3, 4, 5];
// const result1 = arr28.every((element) => element > 0);
// console.log(result1); // true

// const arra1 = [2,.4,53,"56"]
// const result  = arra1.every((element)=>element==Number);
// console.log(result);
// let arra1 = [3,4,5,6,45,67,34,"3jghdjg"];
// let resul = arra1.fill(56,3);
// console.log(resul);
// console.log(arra1);

// let arr10 =[3,4,5,6,45,67,34,"3jghdjg"];
// let arn = arr10.filter((Element)=>Element > 6);
// console.log(arn);
// let arrayn = [2134,546,7,7,5,3,"jghiuety"]
// let arraresult = arrayn.find((Element)=>Element>1);
// console.log(arraresult);
// let barsha = [22222222222222,53,5,64,65,[,35,635,653,"skjdfhjfgjsgf",[786]],[213,[324]],[56]];
// let hgf = barsha.flat();
// console.log(hgf);

// const arr54 = [1, 2, 3, 4, 5,345,6456,4666666666,54,3];
//  arr54.forEach((element,index) => console.log(element));
 const arr55 = [1, 2, 3, 4, 5];
// arr55.forEach((element, index) => console.log(index));
arr56.forEach((elem, index, ar) => co = ar[index] = elem * 2);







