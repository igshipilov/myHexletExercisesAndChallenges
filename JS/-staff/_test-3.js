// const myFunc = (x) => {
//   return (y) => {
//     return y(x);
//   }
// };

// const test = myFunc(5);

// console.log(test(3))

// Безымянный вызов функции
console.log(
  ((num) => num * 2)(5)
);

const x2 = (num) => num * 2;
console.log(
  x2(5)
);

const multXY = (x, y) => x * y;
console.log(
  multXY(2, 4)
);

// Безымянный вызов функции
console.log(
  ((x, y) => x * y)(2, 4)
);


