import _ from 'lodash';

let obj;
let objCopy;

obj = {
  one:
    {
      two: 1,
    },
};
objCopy = _.cloneDeep(obj);

obj.three.four = 42;

console.log(obj);
