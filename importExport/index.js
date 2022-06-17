// Importing the func. / module
// const name = require('./oper');

// ERROR ---> 

// const add = require('./oper');
// const sub = require('./oper');

// FIX -->
const { add, sub, mult, name } = require('./oper')
// OR
// const oper = require('./oper')

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mult(5, 5));

console.log(name);