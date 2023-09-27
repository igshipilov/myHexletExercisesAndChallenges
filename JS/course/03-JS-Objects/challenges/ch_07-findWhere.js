// Задача
/*

arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив
(элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта),
а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным).
Если совпадений не было, то функция должна вернуть null.

Примеры
findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 }
); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }

*/

/*

for..of проходимся по list. Каждый итерируемый элемент – это объект.

Если в этом объекте находятся все ключи из keys и их значения совпадают, то вернуть этот объект:
    if (Object.hasOwn(element, ))
Иначе – идти дальше.

Если не было return currentObject, то return false.

АЛЬТ

Слить итерируемый объект и keys с помощью Object.assign().
Сравнить итерируемый объект после слияния с его версией до слияния:
  если они равны, то вернуть этот объект
  иначе повторить цикл со следующим итерируемым объектом.

Если ничего не было возвращено, то вернуть null.

*/

// ============= MY ==========================
// const findWhere = (list, keys) => {
//   for (const element of list) {
//     const temp = JSON.parse(JSON.stringify(element));
//     const merged = Object.assign(temp, keys);

//     if (JSON.stringify(element) === JSON.stringify(merged)) {
//       return element;
//     }
//   }

//   return null;
// };
// ===========================================

// ============= MY-TEACHER =====================
const findWhere = (data, where) => {
  const extractedWhere = Object.keys(where);

  for (const object of data) {
    let find = true;
    for (const key of extractedWhere) {
      if (object[key] !== where[key]) {
        find = false;
      }
    }
    if (find) {
      return object;
    }
  }

  return null;
};

// ===========================================

const list = [
  { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
  { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
  { title: 'Still foooing', author: 'FooBar', year: 3333 },
  { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];

const keys = { author: 'Shakespeare', year: 1611 };

console.log(findWhere(list, keys));
// { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }
