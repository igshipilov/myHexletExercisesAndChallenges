import _ from 'lodash';

const arr1 = ['a', 'b'];
const arr2 = ['cc', 'ee'];
const arr3 = ['ggg', 'ttt'];
const arr4 = ['ffff', 'oooo'];

const zip = _.zip(arr1, arr2, arr3, arr4);
console.log(zip);

const reverse = _.reverse(zip);
console.log(reverse);

// const toObj = _.fromPairs(arr1);
// const toObj = _.fromPairs([arr1, arr2, arr3, arr4]);

// const toObj = _.fromPairs(
//   [
//     ['a', 'b'], ['cc', 'ee'], ['ggg', 'ttt'], ['ffff', 'oooo']
//   ]
// );

// const toObj = _.fromPairs('a');

// console.log(toObj);

// const a = toObj;

// console.log(a);

const test = [0, 0, 0];
console.log(test.includes(0));
