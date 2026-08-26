// math모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CJS - package.json에서 type이 commonjs일떄

// module.exports = {
//   add, // = add : add
//   sub : sub // = sub
// }

// ES module

export { add, sub };
// function 앞에 직접 export를 붙여도 똑같이 작동한다.

export default function multiply(a, b) {
  return a * b;
}
// export의 기본값 import시 기본값으로 불러와짐
