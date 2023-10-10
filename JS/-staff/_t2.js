const cons = (str1, str2) => (message) => {
  switch (message) {
    case 'car':
      return str1;
    case 'cdr':
      return str2;
    default:
      return `${str1}\\t${str2}`;
  }
};

const pair = cons('first', 'second');
console.log(pair());

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');
