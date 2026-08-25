console.log('안녕 Node.js');



// CJS - package.json에서 type이 commonjs일떄

// const moduleData1 = require('./math');
// const { add, sub } = require('./math');

// console.log(moduleData1);

// console.log(moduleData1.add(1, 2));
// console.log(moduleData1.sub(1, 2));

// console.log(add(1, 2));
// console.log(sub(1, 2));



// ES module

import {add, sub} from "./math.js"

console.log(add(1, 2));
console.log(sub(1, 2));