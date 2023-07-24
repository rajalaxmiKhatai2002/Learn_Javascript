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