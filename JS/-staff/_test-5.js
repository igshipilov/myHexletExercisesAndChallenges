import _ from 'lodash';
import {strict as assert } from "node:assert";

const test = (number) => _.fill([0, 0, 0], number);

assert.deepStrictEqual(test(5), [5, 5, 5]);
assert.deepStrictEqual(test(' '), [1, 1, 1]);

// console.log(test('a'));

// const getDividers = (num) => {
//   const dividers = [];
//   for (let i = 1; i <= num; i += 1) {
//     if (num % i === 0) {
//       dividers.push(i);
//     }
//   }
//   return dividers;
// };
 
// const actual = getDividers(9);
// const expected = [1, 3, 9, 5, 6];

// assert.deepStrictEqual(actual, expected);