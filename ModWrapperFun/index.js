// MODULE WRAPPER FUNCTION

// 1. When u run any code like shown below
const name = 'abhiraj';
console.log(name);
// the code gets wrapped in a function in the backend like --->
(function(exports, require, module, __filename, __dirname){
    const name = 'abhiraj';
    console.log(name);
})

// 2. By default these functions or code remain "PRIVATE".

// 3. The func. format shown in 1 is called IIFE (Immediately Invoked Function Expression).
// IIFE --> A function that runs as soon as it is defined. 