import _ from 'lodash';

// const obj = { a: 1, b: 2 };

// const get = _.get(obj, 'b', 'nope');

// console.log(get);

const arr1 = [1, 2, 3];
const arr2 = [3, 3, 4, 5, 6];

console.log(_.concat(arr1, arr2));

console.log(_.times(4, _.constant(1)));
