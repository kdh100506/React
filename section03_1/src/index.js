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

import mul from './math.js'; // 기본값을 불러올때는 중광호가 필요없은 변수명도 변경 가능
import { add, sub } from './math.js';
// 또는 import mul, { add, sub } from './math.js';

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

// randomcolor 라이브러리

import randomColor from 'randomcolor';

const color = randomColor()
console.log(color)