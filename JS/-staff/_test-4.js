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

const pair = cons(cons(1, cons(4, 3)), cons(5, 1));

console.log(cdr(cdr(car(pair))))

// console.log(cdr(cons(4, 3)))