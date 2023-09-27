import _ from 'lodash';

// SHOULD PASS

let obj;
let objCopy;

beforeEach(() => {
  obj = {
    one:
      {
        two: 1,
      },
    three: { four: 4 },

  };
  objCopy = _.cloneDeep(obj);
});

test('change value', () => {
  _.set(obj, 'one.two', 3);
  objCopy.one.two = 3;
  expect(obj).toEqual(objCopy);
});

test('add key and value inside subobject', () => {
  _.set(obj, 'three.four', 5);
  objCopy.three.four = 5;
  expect(obj).toEqual(objCopy);
});

// SHOULD FAIL
// const obj = { one: { two: 1 } };
// const objCopy = _.cloneDeep(obj);

// test('change value', () => {
//   expect(_.set(objCopy, 'one.two', 3)).toEqual({
//     one: { two: 3 },
//   });
// });

// // Второй тест не пройдёт, потому что `_.set` мутирует объект
// test('add key and value inside subobject', () => {
//   expect(_.set(objCopy, 'three.four', 5)).toEqual({
//     one: { two: 1 },
//     three: { four: 5 },
//   });
// });
