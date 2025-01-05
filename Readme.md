Callback-->
A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation or event occurs.

Callback functions are commonly used in asynchronous programming to handle tasks like data fetching, file reading, or event handling. They ensure that a certain piece of code runs after the previous operation is completed.

How Callbacks Work
When a function receives another function as an argument, it can execute that function whenever it wants (or even multiple times). The passed-in function is the "callback."

Example 1: Simple Callback
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!


Example 2: Callback in Asynchronous Operations
function fetchData(callback) {
  console.log('Fetching data...');

  // Simulate an asynchronous operation (e.g., API call)
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data); // Call the callback with fetched data
  }, 2000);
}

function processData(data) {
  console.log('Data received:', data);
}

fetchData(processData);

// Output:
// Fetching data...
// (after 2 seconds)
// Data received: { name: 'John', age: 30 }



Why Use Callbacks?
Handle Asynchronous Code: Callbacks allow you to handle asynchronous tasks like fetching data or reading files without blocking the execution of other code.
Reusability: You can pass different callback functions to handle various tasks dynamically.


Drawbacks of Callbacks
Callback Hell: Nesting too many callbacks can make the code difficult to read and maintain

Example of Callback Hell:

fetchUserData((user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

To avoid this, modern JavaScript uses Promises and async/await for handling asynchronous code.



DOM, BOM, and Event Handlers in JavaScript

1. DOM (Document Object Model)
The DOM is a programming interface for HTML and XML documents. It represents the structure of the document as a tree of nodes, allowing JavaScript to interact with and manipulate the content, structure, and style of a web page.

Key Concepts
Document: The root of the DOM tree (represents the HTML document).
Nodes: Elements, attributes, text, comments, etc.
Methods: Functions to interact with the DOM (e.g., getElementById, querySelector).

Common DOM Methods
1.Select Elements

const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('.myClass');
const elementsByQueryAll = document.querySelectorAll('.myClass');

2.Modify Elements

const heading = document.getElementById('heading');
heading.textContent = 'New Text'; // Changes text content
heading.style.color = 'red';     // Changes CSS style
heading.setAttribute('title', 'Tooltip'); // Adds an attribute


3.Create and Append Elements

const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
document.body.appendChild(newElement);


4.Remove Elements

const element = document.getElementById('myId');
element.remove(); // Removes the element


2. BOM (Browser Object Model)
The BOM is a representation of the browser and allows interaction with browser components outside the DOM, such as:

Browser window
Navigator
Location
History
Screen

Key Components
1.window Object Represents the browser window. All global variables and functions are part of window.

console.log(window.innerWidth);  // Window width
console.log(window.innerHeight); // Window height

2.navigator Object Provides information about the browser and device.

console.log(navigator.userAgent); // Browser details
console.log(navigator.language);  // Browser language


3.location Object Manages the current URL.

console.log(location.href);      // Current URL
location.href = 'https://google.com'; // Redirects to Google


4.history Object Handles browser navigation history.

history.back();   // Go to the previous page
history.forward(); // Go to the next page


screen Object Provides screen dimensions.

console.log(screen.width);  // Screen width
console.log(screen.height); // Screen height



3. Event Handlers
Event handlers in JavaScript allow you to execute code in response to user actions or browser events.

Common Events:-->
Mouse Events: click, dblclick, mousedown, mouseup, mouseover
Keyboard Events: keydown, keypress, keyup
Form Events: submit, change, focus, blur
Window Events: load, resize, scroll, unload


Ways to Add Event Handlers
A. Inline Events
Add directly in HTML (not recommended).

<button onclick="alert('Button clicked!')">Click Me<button>


B. Using addEventListener
Preferred modern method to attach events.

const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});


C. Assigning Handlers Directly
const button = document.querySelector('button');
button.onclick = () => {
  alert('Button clicked!');
};


Event Object
When an event occurs, an event object is automatically passed to the handler. It contains information about the event.

Example: 
document.addEventListener('click', (event) => {
  console.log(event.type); // Event type: 'click'
  console.log(event.target); // Element that triggered the event
  console.log(event.clientX, event.clientY); // Mouse coordinates
});


Event Propagation
Describes the order in which events are handled:

Capture Phase: Event goes from the root to the target element.
Target Phase: Event reaches the target element.
Bubble Phase: Event bubbles up from the target to the root.
You can control propagation using:

stopPropagation(): Stops the event from propagating further.
preventDefault(): Prevents the default browser behavior.

Example:

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => alert('Parent clicked'));
child.addEventListener('click', (event) => {
  alert('Child clicked');
  event.stopPropagation(); // Prevents parent click from firing
});


Event Delegation
A technique where you attach a single event listener to a parent element and handle events for its children.

Example:
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    alert(`You clicked on ${event.target.textContent}`);
  }
});

HTML:
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

Summary
DOM: Allows manipulation of web page elements.
BOM: Allows interaction with the browser environment.
Event Handlers: Enable responses to user and browser events.
