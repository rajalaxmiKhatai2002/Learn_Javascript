//lexical scope in javascript
// function outerfinction(){
//     let x = 5;
//     let y = 6;
//     function innerfunction(){
//         console.log(x);
//         console.log(y);
//     }
//     innerfunction();
// }

// methods in string
 
// let name = " Sameer       ChepiChepa ";

// //"sameersameersameer chepichepa"

// let nameTrim = name.trim();// remove space from start and end
// let lastIndexOfName = nameTrim.lastIndexOf(" ");
// console.log(lastIndexOfName);
// let trimlength = nameTrim.length;
// console.log(trimlength);
// let indexOfName = nameTrim.indexOf(" ");

// console.log(indexOfName);
// let str1 = nameTrim.slice(0, indexOfName);
// console.log(str1);
// let str2 = nameTrim.slice(lastIndexOfName, trimlength);
// console.log(str2);

// console.log(name.slice(0,13));
// console.log(name);
// let trimSpace = name.trim();
// console.log(trimSpace);
// console.log(trimSpace.length);
// let indexOfStr = trimSpace.indexOf(" ");
// console.log(indexOfStr);
// let lastIndexOfStr = trimSpace.lastIndexOf(" ");
// console.log(lastIndexOfStr);
// let sliceStr = trimSpace.slice(indexOfStr, lastIndexOfStr-1);
// console.log(sliceStr);
// let replaceStr = trimSpace.replaceAll(" ", "");
// console.log(replaceStr);
// let str = "SameerSweety"
// console.log(str);
// let repeatStr = str.repeat(5)
// console.log(repeatStr);
// let nameRepeat = str1.repeat(3) + " " + str2;
// console.log(nameRepeat);
// // trim, length, indexOf, lastIndexOf, slice, replaceAll, repeat, replace
// let str3 = "Sameer";
// let str4 = "Sweety";
// let str5 = "Swain";
// let age = 12;
// let str8 = 2024;
// let outputStr = "Your Age Is " ;
// // welcome to 2024 Your Age Is 12
// console.log("welcome to"+ " "+str8+" " + outputStr + age);
// console.log(welcome to ${str8} ${outputStr} ${age});
// // "SameerSweety Swain"
// let str6 = str3.concat(str4, " ", str5);
// console.log(str6);
// console.log(`${str3}${str4}    
//  ${str5}`);
//  // SameerSweety Swain // input
//  // SweetySameer Swain // output // method chaining 
//  let Name = "SameerSweety Swain";
//  console.log(Name.replace("SameerSweety", "SweetySameer"));
//  // SameerSweety ChepaChepi Swain // input
//  // SameerSweety Swain //output // don't use replace method and concat method to perform this 
//  // MUTADLE STRING 
//  let name1 = "SameerSweety ChepaChepi Swain"
//  name1 = "SameerSweety Swain"
//  console.log(name1);
 // SameerSweety Swain Swain Swain
//  let countName = "SameerSweety Swain Swain Swain"
//  console.log(countName.match("swain"));
let input1 = "sameer"
let result = input1.toUpperCase();

let rf = result.replace("SAMEER","REEMAS")
console.log(result);
console.log(rf);
