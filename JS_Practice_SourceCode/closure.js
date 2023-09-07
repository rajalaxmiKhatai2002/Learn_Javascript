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
// let input1 = "sameer"
// let result = input1.toUpperCase();

// let rf = result.replace("SAMEER","REEMAS")
// console.log(result);
// console.log(rf);
// / 1. concat() method
// // The concat() method is used to merge two or more arrays.
// // This method does not change the existing arrays, but instead returns a new array.
// // Syntax: array1.concat(array2, array3, ..., arrayX)
// // Return: A new Array instance.

// // Example 1
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = arr1.concat(arr2);
// console.log(arr3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// // Example 2
// const arr4 = ['a', 'b', 'c'];
// const arr5 = ['d', 'e', 'f'];
// const arr6 = ['g', 'h', 'i'];
// const arr7 = arr4.concat(arr5, arr6);
// console.log(arr7); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]

// // Example 3
// const arr8 = ['a', 'b', 'c'];
// const arr9 = ['d', 'e', 'f'];
// const arr10 = ['g', 'h', 'i'];
// const arr11 = ['j', 'k', 'l'];
// const arr12 = arr8.concat(arr9, arr10, arr11);
// console.log(arr12); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l' ]

// // 2. copyWithin() method
// // The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// // Syntax: array.copyWithin(target, start, end)
// // Return: The modified array.
// // Note: copyWithin() is a mutable method. It will change the original array.
// // Note: copyWithin() does not change the length of the array.

// // Example 1
// const arr13 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr13.copyWithin(0, 3, 4)); // [ 'd', 'b', 'c', 'd', 'e' ]

// // Example 2
// const arr14 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr14.copyWithin(1, 3)); // [ 'a', 'd', 'e', 'd', 'e' ]

// // Example 3
// const arr15 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr15.copyWithin(1, 2, 4)); // [ 'a', 'c', 'd', 'd', 'e' ]

// // Example 4
// const arr16 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr16.copyWithin(2, 0, 3)); // [ 'a', 'b', 'a', 'b', 'c' ]

// // Example 5
// const arr17 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr17.copyWithin(2, 0, 4)); // [ 'a', 'b', 'a', 'b', 'd' ]

// // Example 6
// const arr18 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr18.copyWithin(2, 0, 5)); // [ 'a', 'b', 'a', 'b', 'c' ]

// // Example 7
// const arr19 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr19.copyWithin(2, 0, 6)); // [ 'a', 'b', 'a', 'b', 'c' ]

// // Example 8
// const arr20 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr20.copyWithin(2, 0, 7)); // [ 'a', 'b', 'a', 'b', 'c' ]

// // Example 9
// const arr21 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr21.copyWithin(2, 0, 8)); // [ 'a', 'b', 'a', 'b', 'c' ]

// // Example 10
// const arr22 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr22.copyWithin(2, 0, 9)); // [ 'a', 'b', 'a', 'b', 'c' ]


// // 3. entries() method
// // The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// // Syntax: array.entries()
// // Return: A new Array iterator object.
// // Note: The returned iterator object can be used to iterate through the elements of the array.

// // Example 1
// const arr23 = ['a', 'b', 'c'];
// const iterator1 = arr23.entries();
// console.log(iterator1.next().value); // [ 0, 'a' ]

// // Example 2
// const arr24 = ['a', 'b', 'c'];
// const iterator2 = arr24.entries();
// console.log(iterator2.next().value); // [ 0, 'a' ]
// console.log(iterator2.next().value); // [ 1, 'b' ]
// console.log(iterator2.next().value); // [ 2, 'c' ]

// // Example 3
// const arr25 = ['a', 'b', 'c'];
// const iterator3 = arr25.entries();
// console.log(iterator3.next().value); // [ 0, 'a' ]
// console.log(iterator3.next().value); // [ 1, 'b' ]
// console.log(iterator3.next().value); // [ 2, 'c' ]
// console.log(iterator3.next().value); // undefined

// // Example 4
// const arr26 = ['a', 'b', 'c'];
// const iterator4 = arr26.entries();
// console.log(iterator4.next().value); // [ 0, 'a' ]
// console.log(iterator4.next().value); // [ 1, 'b' ]
// console.log(iterator4.next().value); // [ 2, 'c' ]
// console.log(iterator4.next().value); // undefined
// console.log(iterator4.next().value); // undefined

// // Example 5
// const arr27 = ['a', 'b', 'c'];
// const iterator5 = arr27.entries();
// console.log(iterator5.next().value); // [ 0, 'a' ]
// console.log(iterator5.next().value); // [ 1, 'b' ]
// console.log(iterator5.next().value); // [ 2, 'c' ]
// console.log(iterator5.next().value); // undefined
// console.log(iterator5.next().value); // undefined
// console.log(iterator5.next().value); // undefined


// // 4. every() method
// // The every() method tests whether all elements in the array pass the test implemented by the provided function.
// // Syntax: array.every(function(currentValue, index, arr), thisValue)
// // Return: true if the callback function returns a truthy value for every array element. Otherwise, false.
// // Note: every() does not change the original array.

// // Example 1
// const arr28 = [1, 2, 3, 4, 5];
// const result1 = arr28.every((element) => element > 0);
// console.log(result1); // true

// // Example 2
// const arr29 = [1, 2, 3, 4, 5];
// const result2 = arr29.every((element) => element > 1);
// console.log(result2); // false

// // Example 3
// const arr30 = [1, 2, 3, 4, 5];
// const result3 = arr30.every((element) => element > 2);
// console.log(result3); // false

// // Example 4
// const arr31 = [1, 2, 3, 4, 5];
// const result4 = arr31.every((element) => element > 3);
// console.log(result4); // false

// // Example 5
// const arr32 = [1, 2, 3, 4, 5];
// const result5 = arr32.every((element) => element > 4);
// console.log(result5); // false

// // Example 6
// const arr33 = [1, 2, 3, 4, 5];
// const result6 = arr33.every((element) => element > 5);
// console.log(result6); // false


// // 5. fill() method
// // The fill() method fills all the elements of an array from a start index to an end index with a static value.
// // Syntax: array.fill(value, start, end)
// // Return: The modified array.
// // Note: fill() is a mutable method. It will change the original array.
// // Note: fill() does not change the length of the array.

// // Example 1
// const arr34 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr34.fill('f', 0, 1)); // [ 'f', 'b', 'c', 'd', 'e' ]

// // Example 2
// const arr35 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr35.fill('f', 0, 2)); // [ 'f', 'f', 'c', 'd', 'e' ]

// // Example 3
// const arr36 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr36.fill('f', 0, 3)); // [ 'f', 'f', 'f', 'd', 'e' ]

// // Example 4
// const arr37 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr37.fill('f', 0, 4)); // [ 'f', 'f', 'f', 'f', 'e' ]

// // Example 5
// const arr38 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr38.fill('f', 0, 5)); // [ 'f', 'f', 'f', 'f', 'f' ]

// // Example 6
// const arr39 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr39.fill('f', 0, 6)); // [ 'f', 'f', 'f', 'f', 'f' ]


// // 6. filter() method
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// // Syntax: array.filter(function(currentValue, index, arr), thisValue)
// // Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
// // Note: filter() does not change the original array.

// // Example 1
// const arr40 = [1, 2, 3, 4, 5];
// const result7 = arr40.filter((element) => element > 0);
// console.log(result7); // [ 1, 2, 3, 4, 5 ]

// // Example 2
// const arr41 = [1, 2, 3, 4, 5];
// const result8 = arr41.filter((element) => element > 1);
// console.log(result8); // [ 2, 3, 4, 5 ]

// // Example 3
// const arr42 = [1, 2, 3, 4, 5];
// const result9 = arr42.filter((element) => element > 2);
// console.log(result9); // [ 3, 4, 5 ]


// // 7. find() method
// // The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// // Syntax: array.find(function(currentValue, index, arr),thisValue)
// // Return: The value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// // Note: find() does not change the original array.

// // Example 1
// const arr43 = [1, 2, 3, 4, 5];
// const result10 = arr43.find((element) => element > 0);
// console.log(result10); // 1

// // Example 2
// const arr44 = [1, 2, 3, 4, 5];
// const result11 = arr44.find((element) => element > 1);
// console.log(result11); // 2


// // 8. findIndex() method
// // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
// // Syntax: array.findIndex(function(currentValue, index, arr),thisValue)
// // Return: The index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
// // Note: findIndex() does not change the original array.

// // Example 1
// const arr45 = [1, 2, 3, 4, 5];
// const result12 = arr45.findIndex((element) => element > 0);
// console.log(result12); // 0

// // Example 2
// const arr46 = [1, 2, 3, 4, 5];
// const result13 = arr46.findIndex((element) => element > 1);
// console.log(result13); // 1


// // 9. flat() method
// // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// // Syntax: array.flat(depth)
// // Return: A new array with the sub-array elements concatenated into it.
// // Note: flat() does not change the original array.

// // Example 1
// const arr47 = [1, 2, [3, 4]];
// const result14 = arr47.flat();
// console.log(result14); // [ 1, 2, 3, 4 ]

// // Example 2
// const arr48 = [1, 2, [3, 4, [5, 6]]];
// const result15 = arr48.flat();
// console.log(result15); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// // Example 3
// const arr49 = [1, 2, [3, 4, [5, 6]]];
// const result16 = arr49.flat(2);
// console.log(result16); // [ 1, 2, 3, 4, 5, 6 ]

// // Example 4
// const arr50 = [1, 2, [3, 4, [5, 6]]];
// const result17 = arr50.flat(3);
// console.log(result17); // [ 1, 2, 3, 4, 5, 6 ]

// // Example 5
// const arr51 = [1, 2, [3, 4, [5, 6]]];
// const result18 = arr51.flat(4);
// console.log(result18); // [ 1, 2, 3, 4, 5, 6 ]


// // 10. flatMap() method
// // The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
// // Syntax: array.flatMap(function(currentValue, index, arr), thisValue)
// // Return: A new array with each element being the result of the callback function and flattened to a depth of 1.
// // Note: flatMap() does not change the original array.

// // Example 1
// const arr52 = [1, 2, 3, 4, 5];
// const result19 = arr52.flatMap((element) => element * 2);
// console.log(result19); // [ 2, 4, 6, 8, 10 ]

// // Example 2
// const arr53 = [1, 2, 3, 4, 5];
// const result20 = arr53.flatMap((element) => [element * 2]);
// console.log(result20); // [ 2, 4, 6, 8, 10 ]


// // 11. forEach() method
// // The forEach() method executes a provided function once for each array element.
// // Syntax: array.forEach(function(currentValue, index, arr), thisValue)
// // Return: undefined
// // Note: forEach() does not change the original array.

// // Example 1
// const arr54 = [1, 2, 3, 4, 5];
// arr54.forEach((element) => console.log(element)); // 1 2 3 4 5

// // Example 2
// const arr55 = [1, 2, 3, 4, 5];
// arr55.forEach((element, index) => console.log(index)); // 0 1 2 3 4

// // Example 3
// const arr56 = [1, 2, 3, 4, 5];
// arr56.forEach((elem, index, ar) => co = ar[index] = elem * 2);
// console.log(arr56); // [ 2, 4, 6, 8, 10 ]


// // 12. includes() method
// // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// // Syntax: array.includes(valueToFind, fromIndex)
// // Return: true if the value is found, otherwise false.
// // Note: includes() does not change the original array.

// // Example 1
// const arr57 = [1, 2, 3, 4, 5];
// const result21 = arr57.includes(1);
// console.log(result21); // true

// // Example 2
// const arr58 = [1, 2, 3, 4, 5];
// const result22 = arr58.includes(2);
// console.log(result22); // true


// // 13. indexOf() method
// // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// // Syntax: array.indexOf(searchElement, fromIndex)
// // Return: The first index of the element in the array; -1 if not found.
// // Note: indexOf() does not change the original array.

// // Example 1
// const arr59 = [1, 2, 3, 4, 5];
// const result23 = arr59.indexOf(1);
// console.log(result23); // 0

// // Example 2
// const arr60 = [1, 2, 3, 4, 5];
// const result24 = arr60.indexOf(2);
// console.log(result24); // 1


// // 14. isArray() method
// // The isArray() method determines whether the passed value is an Array.
// // Syntax: Array.isArray(value)
// // Return: true if the value is an Array; otherwise, false.
// // Note: isArray() does not change the original array.

// // Example 1
// const arr61 = [1, 2, 3, 4, 5];
// const result25 = Array.isArray(arr61);
// console.log(result25); // true

// // Example 2
// const arr62 = [1, 2, 3, 4, 5];
// const result26 = Array.isArray(1);
// console.log(result26); // false


// // 15. join() method
// // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// // Syntax: array.join(separator)
// // Return: A string with all array elements joined. If omitted, the elements are separated with a comma.
// // Note: join() does not change the original array.

// // Example 1
// const arr63 = ['a', 'b', 'c'];
// const result27 = arr63.join();
// console.log(result27); // a,b,c

// // Example 2
// const arr64 = ['a', 'b', 'c'];
// const result28 = arr64.join('');
// console.log(result28); // abc


// // 16. keys() method
// // The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// // Syntax: array.keys()
// // Return: A new Array iterator object.
// // Note: The returned iterator object can be used to iterate through the elements of the array.

// // Example 1
// const arr65 = ['a', 'b', 'c'];
// const iterator6 = arr65.keys();
// console.log(iterator6.next().value); // 0

// // Example 2
// const arr66 = ['a', 'b', 'c'];
// const iterator7 = arr66.keys();
// console.log(iterator7.next().value); // 0


// // 17. lastIndexOf() method
// // The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// // Syntax: array.lastIndexOf(searchElement, fromIndex)
// // Return: The last index of the element in the array; -1 if not found.
// // Note: lastIndexOf() does not change the original array.

// // Example 1
// const arr67 = ['a', 'b', 'c'];
// const result29 = arr67.lastIndexOf('a');
// console.log(result29); // 0


// // 18. map() method
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// // Syntax: array.map(function(currentValue, index, arr), thisValue)
// // Return: A new array with each element being the result of the callback function.
// // Note: map() does not change the original array.

// // Example 1
// const arr68 = [1, 2, 3, 4, 5];
// const result30 = arr68.map((element) => element * 2);
// console.log(result30); // [ 2, 4, 6, 8, 10 ]


// // 19. pop() method
// // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// // Syntax: array.pop()

// // Example 1
// const arr69 = ['a', 'b', 'c'];
// const result31 = arr69.pop();
// console.log(result31); // c


// // 20. push() method
// // The push() method adds one or more elements to the end of an array and returns the new length of the array.
// // Syntax: array.push(element1, ..., elementN)
// // Return: The new length property of the object upon which the method was called.
// // Note: push() will change the original array.

// // Example 1
// const arr70 = ['a', 'b', 'c'];
// const result32 = arr70.push('d');
// console.log(result32); // 4


// // 21. reduce() method
// // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// // Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// // Return: The single value that results from the reduction.
// // Note: reduce() does not change the original array.

// // Example 1
// const arr71 = [1, 2, 3, 4, 5];
// const result33 = arr71.reduce((total, element) => total + element);
// console.log(result33); // 15


// // 22. reduceRight() method
// // The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// // Syntax: array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
// // Return: The single value that results from the reduction.
// // Note: reduceRight() does not change the original array.

// // Example 1
// const arr72 = [1, 2, 3, 4, 5];
// const result34 = arr72.reduceRight((total, element) => total + element);
// console.log(result34); // 15


// // 23. reverse() method
// // The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// // Syntax: array.reverse()
// // Return: The reversed array.
// // Note: reverse() will change the original array.

// // Example 1
// const arr73 = ['a', 'b', 'c'];
// const result35 = arr73.reverse();
// console.log(result35); // [ 'c', 'b', 'a' ]


// // 24. shift() method
// // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// // Syntax: array.shift()
// // Return: The removed element from the array; undefined if the array is empty.
// // Note: shift() will change the original array.

// // Example 1
// const arr74 = ['a', 'b', 'c'];
// const result36 = arr74.shift();
// console.log(result36); // a


// // 25. slice() method
// // The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
// // Syntax: array.slice(begin, end)
// // Return: A new array containing the extracted elements.
// // Note: slice() does not change the original array.

// // Example 1
// const arr75 = ['a', 'b', 'c'];
// const result37 = arr75.slice(0, 1);
// console.log(result37); // [ 'a' ]

// // Example 2
// const arr76 = ['a', 'b', 'c'];
// const result38 = arr76.slice(0, 2);
// console.log(result38); // [ 'a', 'b' ]

// // Example 3
// const arr77 = ['a', 'b', 'c'];
// const result39 = arr77.slice(0, 3);
// console.log(result39); // [ 'a', 'b', 'c' ]


// // 26. some() method
// // The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// // Syntax: array.some(function(currentValue, index, arr), thisValue)
// // Return: true if the callback function returns a truthy value for at least one array element. Otherwise, false.
// // Note: some() does not change the original array.

// // Example 1
// const arr78 = [1, 2, 3, 4, 5];
// const result40 = arr78.some((element) => element > 0);
// console.log(result40); // true

// // Example 2
// const arr79 = [1, 2, 3, 4, 5];
// const result41 = arr79.some((element) => element > 1);
// console.log(result41); // true

// // Example 3
// const arr80 = [1, 2, 3, 4, 5];
// const result42 = arr80.some((element) => element > 2);
// console.log(result42); // true


// // 27. sort() method
// // The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// // Syntax: array.sort(compareFunction)
// // Return: The sorted array. Note that the array is sorted in place, and no copy is made.
// // Note: sort() will change the original array.

// // Example 1
// const arr81 = ['c', 'a', 'b'];
// const result43 = arr81.sort();
// console.log(result43); // [ 'a', 'b', 'c' ]


// // 28. splice() method
// // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// // Syntax: array.splice(start, deleteCount, item1, item2, ...)
// // Return: An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
// // Note: splice() will change the original array.

// // Example 1
// const arr82 = ['a', 'b', 'c', 'd', 'e'];
// const result44 = arr82.splice(0, 1);
// console.log(result44); // [ 'a' ]

// // Example 2
// const arr83 = ['a', 'b', 'c', 'd', 'e'];
// const result45 = arr83.splice(0, 2);
// console.log(result45); // [ 'a', 'b' ]


// // 29. toString() method
// // The toString() method returns a string representing the specified array and its elements.
// // Syntax: array.toString()
// // Return: A string representing the elements of the array.
// // Note: toString() does not change the original array.

// // Example 1
// const arr84 = ['a', 'b', 'c'];
// const result46 = arr84.toString();
// console.log(result46); // a,b,c


// // 30. unshift() method
// // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// // Syntax: array.unshift(element1, ..., elementN)
// // Return: The new length property of the object upon which the method was called.
// // Note: unshift() will change the original array.

// // Example 1
// const arr85 = ['a', 'b', 'c'];
// const result47 = arr85.unshift('d');
// console.log(result47); // 4


// // 31. values() method
// // The values() method returns a new Array Iterator object that contains the values for each index in the array.
// // Syntax: array.values()
// // Return: A new Array iterator object.
// // Note: The returned iterator object can be used to iterate through the elements of the array.

// // Example 1
// const arr86 = ['a', 'b', 'c'];
// const iterator8 = arr86.values();
// console.log(iterator8.next().value); // a

// // Example 2
// const arr87 = ['a', 'b', 'c'];
// const iterator9 = arr87.values();
// console.log(iterator9.next().value); // a


// // 32. from() method
// // The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// // Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
// // Return: A new Array instance.
// // Note: from() does not change the original array.

// // Example 1
// const arr88 = Array.from('abc');
// console.log(arr88); // [ 'a', 'b', 'c' ]

// // Example 2
// const arr89 = Array.from([1, 2, 3]);
// console.log(arr89); // [ 1, 2, 3 ]

// // Example 3
// const arr90 = Array.from([1, 2, 3], (x) => x + x);
// console.log(arr90); // [ 2, 4, 6 ]

// // Example 4
// const arr91 = Array.from({ length: 5 }, (v, k) => k);
// console.log(arr91); // [ 0, 1, 2, 3, 4 ]

// // Example 5
// const arr92 = Array.from({ length: 5 }, (v, k) => k + k);
// console.log(arr92); // [ 0, 2, 4, 6, 8 ]


// // 33. of() method
// // The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// // Syntax: Array.of(element0[, element1[, ...[, elementN]]])
// // Return: A new Array instance.
// // Note: of() does not change the original array.

// // Example 1
// const arr93 = Array.of(1, 2, 3);
// console.log(arr93); // [ 1, 2, 3 ]

// // Example 2
// const arr94 = Array.of('a', 'b', 'c');
// console.log(arr94); // [ 'a', 'b', 'c' ]

