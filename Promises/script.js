// 1. Promises
// A Promise is a way to handle asynchronous operations 
// in JavaScript. It represents a value that 
// may be available now, or in the future, or never.

// Promise States
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Creating and Using Promises

// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Simulating success or failure
    
//     setTimeout(() => {
//       if (success) {
//         resolve("Operation succeeded!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 2000); // Simulate async work
//   });
  
//   // Consuming the Promise
//   myPromise
//     .then((message) => {
//       console.log("Success:", message); // Runs if resolved
//     })
//     .catch((error) => {
//       console.log("Error:", error); // Runs if rejected
//     });
  

// Key Points:
//     resolve() is called when the operation is successful.
//     reject() is called when the operation fails.
//     .then() handles success, .catch() handles errors.



// 2. Async/Await
//    async and await make working with promises 
//     easier by writing asynchronous code that 
//     looks synchronous.
    
//     How It Works
//     async: Declares a function that always 
//     returns a promise.
//     await: Pauses the execution of the async 
//     function until the promise is resolved or rejected.

// Example with async/await

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 2000);
//   });
// };

// const main = async () => {
//   console.log("Fetching data...");
  
//   try {
//     const data = await fetchData(); // Waits for the promise to resolve
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error); // Catches any errors
//   }
  
//   console.log("Done!");
// };
// main();

// Key Points:
// The await keyword can only be used inside an 
// async function.
// It pauses the execution of the function until 
// the promise resolves.


// 3. Chaining Promises
// You can chain multiple .then() calls to handle 
// sequential asynchronous operations.

// const step1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 completed"), 1000);
//   });
// };

// const step2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 completed"), 1000);
//   });
// };

// step1()
//   .then((result1) => {
//     console.log(result1);
//     return step2();
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });



// 4. Parallel Promises with Promise.all
// Promise.all runs multiple promises in parallel 
// and resolves when all of them are complete.

// Example: 
// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log("All promises resolved:", results);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// 5. Error Handling with async/await

// You can handle errors using try-catch inside an 
// async function.

// Example: 

// const faultyPromise = () => {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject("Something went wrong!"), 1000);
//   });
// };

// const main = async () => {
//   try {
//     const result = await faultyPromise();
//     console.log(result);
//   } catch (error) {
//     console.log("Caught error:", error);
//   }
// };

// main();


// 6. Comparison Between Promises and async/await
// Using Promises

// Example: 
// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


// Using async/await

// Example:
// const main = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// main();

// Summary:

// Concept	            Description
// Promises	        Handle asynchronous operations; use .then() and .catch().

// async/await	      Makes async code look synchronous; easier to read and write.

// Promise.all	      Runs multiple promises in parallel.

// Error Handling	  Use .catch() with promises or try-catch with async/await.






