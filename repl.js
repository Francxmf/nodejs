//const repl = require('node:repl');
//repl.start('>global.crypto')


const crypto = require('crypto');
const id = crypto.randomBytes(16).toString('hex');
console.log(id);
