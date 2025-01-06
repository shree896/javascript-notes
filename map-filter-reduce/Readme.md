Explanation of map(), filter(), and reduce() in JavaScript
These are high-order array methods in JavaScript that help perform operations on arrays in a clean and functional way.

1. map()
Purpose:
Transforms each element in an array and returns a new array with the same number of elements.

Syntax:
const newArray = array.map(callback(element, index, array));

callback: A function that is applied to each element of the array.
Returns: A new array with the transformed elements.

Example:
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]


2. filter()
Purpose:
Filters elements of an array based on a condition and returns a new array with elements that satisfy the condition.

Syntax:
const newArray = array.filter(callback(element, index, array));

callback: A function that tests each element.
Returns: A new array with elements that pass the test.

Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


3. reduce()
Purpose:
Reduces an array to a single value by applying a callback function on each element.

Syntax:
const result = array.reduce(callback(accumulator, element, index, array), initialValue);

accumulator: Stores the result of the computation.
initialValue: Optional. The starting value for the accumulator.

Example:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10



Combined Example
const numbers = [1, 2, 3, 4, 5];

// Square all numbers, filter even ones, then sum them
const result = numbers
  .map(num => num * num) // [1, 4, 9, 16, 25]
  .filter(num => num % 2 === 0) // [4, 16]
  .reduce((sum, num) => sum + num, 0); // 20

console.log(result); // 20

