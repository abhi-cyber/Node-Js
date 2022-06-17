// Importing the func. / module
// const name = require('./oper');

// ERROR ---> 

// const add = require('./oper');
// const sub = require('./oper');

// FIX --> 
const oper = require('./oper')

console.log(oper.add(5, 5));
console.log(oper.sub(5, 5));

// console.log(name);