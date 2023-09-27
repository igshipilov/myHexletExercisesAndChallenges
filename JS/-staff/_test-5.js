const addString = (str1, str2) => (connector) => `${str1} ${connector} ${str2}`;

const str = addString('one', 'two');

console.log(str);
console.log(str('and'));

