const util = require('./util.js');

console.log('Setting util value from app.js');
util.set('Hello Node world!');

console.log('Getting util value from app.js');
console.log(util.get());

require('./file2.js');
