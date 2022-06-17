const path = require('path');

console.log(path.dirname('C:/Users/DELL/Desktop/Node Js/Path Module/pathmod.js'));
console.log(path.extname('C:/Users/DELL/Desktop/Node Js/Path Module/pathmod.js')); // extension type
console.log(path.basename('C:/Users/DELL/Desktop/Node Js/Path Module/pathmod.js')); // Name of file

// IMP ---> parse() --> You will get the --> dir, root, base, name, ext.

// console.log(path.parse('C:/Users/DELL/Desktop/Node Js/Path Module/pathmod.js')); 

// Calling its property
const myPath = path.parse('C:/Users/DELL/Desktop/Node Js/Path Module/pathmod.js');
console.log(myPath.name)