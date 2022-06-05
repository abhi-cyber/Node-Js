{/*
MODULES :-- Encapsulated Code (only share minimum)
Modules help us access variables and functions from different files. We can also choose the data we want to be shareable and which not.
Built-in Modules ==> 
1. os
2. PATH 
3. FS
4. HTTP
*/}

{/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
// Here we will be calling the variables and functions from  diff. files using modules.

const names = require('./names') // This line will access the name variables from names.js .
const sayHi = require('./func')

sayHi('abhiraj')
sayHi(names.john)
sayHi(names.peter)

// You can also import arrays, dictnories, etc.

{/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
// PATH Module

const path = require('path')

console.log(path.sep)

const filePath = path.join('test.txt')
console.log(filePath);

//Below code gives the base name
const base = path.basename(filePath)
console.log(base)