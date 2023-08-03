The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like model, where each element in the document is represented as a node in the tree. The DOM provides methods and properties interact with these nodes, allowing developers manipulate the content, structure, and style of a web page dynamically.
In JavaScript, the DOM is accessed through the global document object, which represents the current web page loaded in the browser. Here's a brief overview of how the DOM works:

1.Tree Structure: The DOM represents an HTML or XML document as a hierarchical tree structure. The topmost node is the document object, which represents the entire document. Each HTML element, such as <body>, <div>, or <p>, is represented as a node in the tree.

2.Node Types: Nodes in the DOM tree can be of different types, including elements, text, comments, attributes, etc. Elements are the most common type and represent HTML tags. Text nodes contain the actual text within an element.

3.Accessing Elements: You can access elements in the DOM using various methods provided by the document object. For example, you can use getElementById() to retrieve an element based on its unique, getElementsByClassName() to get a collection of elements with a specific class name, or querySelector()/querySelectorAll() to select elements using CSS selectors.

4.Manipulating Elements: Once you have a reference to an element, you can modify its properties, such as innerHTML to change its content, style to modify its appearance, or setAttribute() to set attributes like class or src. You can also create new elements using the createElement() method and append them to the DOM tree using methods like appendChild() or insertBefore().

5.Event Handling: The DOM allows you to handle events, such as mouse clicks or keyboard input, using event listeners. You can attach event listeners to elements using methods like addEventListener(), and specify the function to be executed when the event occurs.

6.Traversing the DOM: You can navigate through the DOM tree by accessing an element's parent, children, or siblings. For example, you can use properties like parentNode, childNodes, firstChild, nextSibling, etc., to move around the tree and access related nodes.

7.By leveraging the DOM, JavaScript can dynamically modify the content and behavior of web pages, enabling interactive and responsive web applications.

console:-----------------
document.getElementById('parent')
null //output
document.getElementById('heading')
<h1 id=​"heading" class=​"sub-parent">​learning dom manipuation in javascript​</h1>​
document.getElementById('heading').id
'heading'

document.getElementById('heading').class
undefined

document.getElementById('heading').className
'sub-parent'

document.getElementById('heading').getAttribute
ƒ getAttribute() { [native code] }

title
<h1 id=​"heading" class=​"sub-parent">​learning dom manipuation in javascript​</h1>​
title.style.backgroundColor = 'red'
'red'
title.style.pad = '5px'
'5px'
title.style.padding = '5px'
'5px'
title.style.color = 'green'
'green'
title.style.color = 'violet'
'violet'
title
<h1 id=​"heading" class=​"sub-parent" style=​"background-color:​ red;​ padding:​ 5px;​ color:​ violet;​">​learning dom manipuation in javascript​</h1>​
title.textContent //this method used to print or access the content in the html page
'learning dom manipuation in javascript'
//how to add contents in dom:------------------
1.document.innerhtml()
2.document.textcontent()
3.document.innertext()

DIFFERENCE BETWEEN innerText AND textContent:-----------
let us discuss about some query selectors:--------
1.document.querySelector()
ex:-document.querySelector('h2')
<h2>​Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio?​</h2>​

document.querySelector('#heading')
<h1 id=​"heading" class=​"sub-parent">​learning dom manipuation in javascript​</h1>​
document.querySelector('.sub-parent')
<h1 id=​"heading" class=​"sub-parent">​learning dom manipuation in javascript​</h1>​
document.querySelector('input[type = "text"]')
<input type="text">


ex:--
document.querySelector('ul')
<ul>​…​</ul>​
const myul = document.querySelector('ul')
undefined
myul.querySelector('li')
<li>​…​</li>​
const turngreen = myul.querySelector('li')
undefined
turngreen.style.backgroundColor = "green"
'green'

2.document.querySelectorAll():-------
ex:---------
document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
const templi = document.querySelectorAll('li')
undefined
templi
NodeList(3) [li, li, li]
templi.style.color = "green"
VM1570:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:20
(anonymous) @ VM1570:1
templi[0].style.color = "green"
'green'

document.getElementsByClassName('dom1')
HTMLCollection(4) [li.dom1, li.dom1, li.dom1, li.dom1]
0
: 
li.dom1
1
: 
li.dom1
2
: 
li.dom1
3
: 
li.dom1
length
: 
4
[[Prototype]]
: 
HTMLCollection
const listitems = document.getElementsByClassName('dom1')
undefined
listitems
HTMLCollection(4) [li.dom1, li.dom1, li.dom1, li.dom1]
0
: 
li.dom1
1
: 
li.dom1
2
: 
li.dom1
3
: 
li.dom1
length
: 
4
[[Prototype]]
: 
HTMLCollection
Array.from(listitems)
(4) [li.dom1, li.dom1, li.dom1, li.dom1]
0
: 
li.dom1
1
: 
li.dom1
2
: 
li.dom1
3
: 
li.dom1
length
: 
4
[[Prototype]]
: 
Array(0)


In JavaScript, an execution context is an abstract concept that defines the environment in which JavaScript code is executed. It consists of variables, functions, and objects that are accessible by the code at a particular point during runtime.

Every time a function is invoked or a script is executed, a new execution context is created. JavaScript uses a stack-like structure called the "call stack" to manage these execution contexts.

Each execution context has three main components:

1.Variable Object (VO) / Environment Record: It contains all the variables, function declarations, and function arguments defined within the current scope. In ECMAScript 5 and earlier, the Variable Object was used. However, in ECMAScript 6 (ES6) and later, the Environment Record is used instead.

2.Scope Chain: It is a list of Variable Objects or Environment Records that represents the scope hierarchy. The scope chain allows the engine to resolve variable references when executing code.

3.This Value: It refers to the value of the this keyword within the current execution context. The this value can vary depending on how a function is called.

The execution context also tracks the order of code execution, maintains the context of asynchronous operations, and handles exceptions.

Understanding the execution context is crucial for understanding variable scoping, hoisting, closures, and how the JavaScript engine executes code.


JAVASCRIPT execution context is basically three different types like:---------------------
1.global execution context
2.function execution context
3.eval execution context

It will executed in two ways like:
1.memory creation phase
2.execution phase

->javascript can execute one command at a time and in a specific order so javascript is called synchronous,single thread language.
-->whwn we run javascript code first of all an execution context is created..
call stack in javascript:--------
In JavaScript, the call stack is a mechanism used by the JavaScript engine to keep track of function calls during the execution of a program. It operates on the Last-In-First-Out (LIFO) principle, meaning that the last function called is the first one to be resolved.

When a function is invoked in JavaScript, a new frame is created and pushed onto the call stack. This frame contains information about the function, such as its arguments and variables. The function's code is then executed, and if the function calls another function, a new frame is created for that function and pushed onto the top of the stack.

The call stack allows JavaScript to keep track of where it is in a program's execution. When a function completes its execution, its frame is popped off the stack, and the control returns to the previous function. This process continues until all functions have completed, and the stack becomes empty

+true;
 !'Lydia';
A: 1 and false
B: false and NaN
C: false and false

The unary plus tries to convert an operand to a number. true is 1, and false is 0.

The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.