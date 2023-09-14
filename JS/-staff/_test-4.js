// const functions = {
//   right1: (items) => items[items.length - 1],
//   fail1: () => 2,
//   fail2: (items) => items[0],
// };

// console.log(functions['right1']('hellow'));
// console.log(functions['right1']('bar'))
// console.log(functions['fail1']('bar'))

// const obj = {
//   a: (some) => some * 2,
// };

// console.log(obj['a'](3))


const getDouble = (number) => number * 2;

const test = getDouble;

console.log(getDouble(3));
console.log(test(4));