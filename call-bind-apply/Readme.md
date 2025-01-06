Call, Apply, and Bind in JavaScript
These are methods of functions in JavaScript used to control the value of this when invoking a function. They allow you to borrow functions and explicitly set the this context.

1. call()
Definition:
The call() method calls a function with a specific this value and individual arguments passed one by one.

Syntax:

functionName.call(thisArg, arg1, arg2, ...)

Example:

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
}

greet.call(person, 'Hello'); // Output: Hello, John Doe!


2. apply()
Definition:
The apply() method is similar to call(), but it takes arguments as an array (or array-like object).

Syntax:
functionName.apply(thisArg, [arg1, arg2, ...])

Example:
const person = {
  firstName: 'Jane',
  lastName: 'Doe'
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.apply(person, ['Hi', '!']); // Output: Hi, Jane Doe!


3. bind()
Definition:
The bind() method returns a new function where this is permanently set to the provided value. Unlike call and apply, it does not immediately execute the function.

Syntax:
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);

Example:
const person = {
  firstName: 'Alice',
  lastName: 'Smith'
};

function greet(greeting) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
}

const boundGreet = greet.bind(person);
boundGreet('Hello'); // Output: Hello, Alice Smith!


When to Use Them
call: When you need to invoke a function immediately with a specific this and arguments.
apply: When the function arguments are already in an array or array-like format.
bind: When you need a reusable function with a fixed this context.