const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
  }
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

const pair = cons(4, 2);
console.log(car(pair)); // 4
console.log(cons(4, 2)('cdr')); // 2

console.log(car(pair) === cons(4, 2)('car')); // true