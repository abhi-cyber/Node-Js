const os = require('os');

console.log(os.arch()); // x64 bit arch.
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(freeMemory); // in bytes
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // in GB

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`); // in GB