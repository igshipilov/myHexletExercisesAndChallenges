/*

Функция получает объект и массив
Сравнивает каждый элемент массива с ключами объекта
Если элемент совпадает с ключом, то возвращает новый объект с этим ключом

*/

// const pick = (obj, array) => {
//   const resultObj = {};

//   for (const key of array) {
//     const objToArray = Object.keys(obj);
//     if (objToArray.includes(key)) {
//       resultObj[key] = obj[key];

//     }

//   };

//   return resultObj;
// };

// =============== TEACHER ====================
const pick = (obj, array) => {
  const resultObj = {};

  for (const key of array) {
    if (Object.hasOwn(obj, key)) {
      resultObj[key] = obj[key];
    }
  }

  return resultObj;
};
// ============================================

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, [])); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }

// console.log(data['none'] === undefined);

// console.log(Object.keys(data).includes('user'));
