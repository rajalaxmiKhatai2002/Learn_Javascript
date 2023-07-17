// JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic web pages. It was initially developed by Brendan Eich at Netscape Communications and has since become one of the most widely used languages for client-side scripting on the web.

// One of the key features of JavaScript is its ability to be embedded directly into HTML documents, allowing developers to add interactivity to their websites. It is supported by all major web browsers, making it a versatile and accessible option for web development.

// JavaScript is a multi-paradigm language, which means it supports both procedural and object-oriented programming styles. It provides a wide range of built-in functions and objects that can be used to manipulate web page elements, handle events, perform calculations, and interact with web APIs.
// JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic web pages. It was initially developed by Brendan Eich at Netscape Communications and has since become one of the most widely used languages for client-side scripting on the web.

// One of the key features of JavaScript is its ability to be embedded directly into HTML documents, allowing developers to add interactivity to their websites. It is supported by all major web browsers, making it a versatile and accessible option for web development.

// JavaScript is a multi-paradigm language, which means it supports both procedural and object-oriented programming styles. It provides a wide range of built-in functions and objects that can be used to manipulate web page elements, handle events, perform calculations, and interact with web APIs.
// Sure! Here's a basic example of JavaScript code that displays a message in the console:
console.log("Hello, world!");  //o/p:-hello world
// This code uses the console.log() function to print the message "Hello, world!" to the browser's console
// lets get started why javascript is used in mern development?
// JavaScript is a versatile programming language that can be used both on the front-end and back-end of web development. In MERN (MongoDB, Express.js, React, Node.js) stack, JavaScript is used to build different components of the application.

//1. Front-end Development: JavaScript is primarily used for building interactive and dynamic user interfaces in MERN applications. React, a popular JavaScript library, is used for creating UI components and handling the presentation layer. It allows you to create reusable UI elements and efficiently manage the application state.

// 2.Back-end Development: Node.js is a server-side JavaScript runtime environment, which enables JavaScript to be executed on the server. It provides an efficient and scalable platform for building the server-side logic of MERN applications. Node.js has a wide range of libraries and frameworks available for implementing server-side functionalities, such as Express.js, which is a lightweight web framework for Node.js. Express.js helps in handling HTTP requests, routing, and middleware integration.

//3. Data Persistence: MongoDB, a NoSQL database used in MERN stack, stores data in a JSON-like format called BSON (Binary JSON). Since JavaScript inherently deals with JSON objects, it becomes easier to work with MongoDB using JavaScript.

//4. Full-stack Development: JavaScript's ability to run on both the client-side (browser) and server-side (Node.js) makes it well-suited for full-stack development in the MERN stack. As developers only need to write code in one language throughout the entire application, it reduces the complexity and improves productivity.

// Overall, JavaScript is an essential part of MERN development because it facilitates seamless communication between the front-end and back-end components of the application, allowing for efficient development and maintenance of web applications.


// variables in javascript:--------------
// In JavaScript, variables are used to store data values that can be accessed and manipulated throughout your code. Here's how you declare variables in JavaScript:
// it is declared in three different ways like:
// 1.var
// 2.const
// 3.let
// The difference between var, let, and const lies in their scoping behavior and mutability:

// 1.Variables declared with var have function scope or global scope (if declared outside any function), which means they are accessible throughout the entire function or globally. They can also be redeclared and reassigned within their scope.
// 2.Variables declared with let have block scope, meaning they are limited to the block (within curly braces) where they are defined or any nested blocks. They can be reassigned within their scope but cannot be redeclared in the same scope.
//3. Variables declared with const also have block scope and behave like let, but they are immutable, i.e., their values cannot be changed once assigned. However, if a const variable holds an object or an array, its properties or elements can still be modified.
// It's important to note that JavaScript is a dynamically-typed language, which means you don't need to explicitly declare the type of a variable.
// In JavaScript, there are several built-in data types that allow you to store and manipulate different kinds of values. The data types in JavaScript are as follows:

// 1.Number: Represents numeric values, such as integers or floating-point numbers.
// 2.String: Represents a sequence of characters enclosed in single quotes ('') or double quotes ("").
// 3.Boolean: Represents either the value true or false.
// 4.Null: Represents the intentional absence of any object value. It is a primitive value.
// 5.Undefined: Represents an uninitialized variable or missing property.
// 6.Object: Represents a collection of key-value pairs, where each value can be of any data type (including another object).
// 7.Array: Represents an ordered list of values. Arrays can contain elements of different data types.collection of values this values can be as different types of values.
// 8.Symbol: Represents a unique identifier and is often used as a key in objects.
// In JavaScript, type casting refers to the process of converting a value from one data type to another. JavaScript provides several methods for type casting, including implicit and explicit type casting.

//1. Implicit Type Casting:
// Automatic type conversion that occurs when JavaScript tries to perform an operation on operands of different types.
// For example, when you use the "+" operator on a string and a number, JavaScript will attempt to convert the number to a string and concatenate them.
//2.Explicit Type Casting:
// Manually converting a value from one type to another using specific functions or operators.
// Examples include converting a string to a number or vice versa.
// To convert a value to a Number data type, you can use the Number() function or the unary plus operator (+).
//copy via value and copy via reference
//1.Copying by Value: When you copy a primitive value (such as numbers, booleans, or strings), you create an independent copy of that value. Modifying one variable doesn't affect the other. Here's an example:
//2.Copying by Reference: When you copy/reference complex data types such as objects or arrays, you are creating a reference to the original object/array rather than making a new copy. Both variables point to the same memory location. Modifying one affects the other. Consider this example:(intro.js file)