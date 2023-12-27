/* eslint-disable import/prefer-default-export */
import fsp from 'fs/promises';

/*

Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей
и возвращает массив (в промисе), с описанием того, что находится по каждому из путей в виде строк 'directory' и 'file'.

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка,
то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки
(иначе придется задействовать механизм, который проходится в курсах далее).

Примеры
import { getTypes } from './file.js';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]

Подсказки
fsPromises.stat - информация о файле или директории. Для проверки на директорию используйте метод isDirectory.
Методы then и catch не меняют сам промис, а возвращают новый

*/




// ============== МОЁ РЕШЕНИЕ 1 ==================
// export const getTypes = (filepaths) => {
//   const initPromise = Promise.resolve([]);

//   const promise = filepaths.reduce((acc, path) => {
//     return acc.then((contents) => {
//       return fsp.stat(path).then((data) => {
//         if (data.isDirectory()) {
//           contents = contents.concat('directory');
//         } else if (data.isFile()) {
//           contents = contents.concat('file');
//         } else {
//           contents = contents.concat(null);
//         }
//         return contents;
//       }).catch(() => contents.concat(null));
//     })

//   }, initPromise);

//   return promise.then((data) => data);
// };
// =============================================








// ============= TEACHER =====================
// const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

// export const getTypes = (filesPath) => {
//   // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
//   // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
//   const processPath = (filepath, result) => fsp.stat(filepath)
//     .then((data) => [...result, getTypeName(data)])
//     .catch(() => [...result, null]);

//   const resultPromise = filesPath.reduce(
//     // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
//     // result - предыдущее значение аккумулятора
//     (promise, filepath) => promise.then((result) => processPath(filepath, result)),
//     Promise.resolve([]),
//   );
//   return resultPromise;
// };
// ===========================================








/*

Разбираю решение учителя

1. Часть:
promise.then((result) => { ... })

  • promise – это Promise.resolve([]), а именно массив. На первой итерации он пустой.
  • .then((result) => { ... }) – это результат работы промиса, который Promise.resolve([]).
    То есть текущий аккумулятор-массив записываем в `result`.

2. Промис fsp.stat(filepath) преобразует текущий элемент массива (путь) в объект fs.Stats,
чтобы у него появился метод `.isDirectory()`.

3. Часть:
.then((data) => [...result, getTypeName(data)])

  • наполняет массив текущим результатом – здесь это `result`
  • дописывает к нему текущий итерируемый элемент, преобразованный в нужную нами форму с помощью функции getTypeName().

  NOTE:
  - на первом круге result = [], поэтому [...result, getTypeName(data)] вернёт как бы [...[], <значение1>]
  - на втором круге result = [<значение1>], поэтому [...result, getTypeName(data)] вернёт как бы [...[<значение1>], <значение2>]
  - на втором круге result = [<значение2>], поэтому [...result, getTypeName(data)] вернёт как бы [...[<значение1>, <значение2>], <значение3>]

*/











// ==== РЕШЕНИЕ УЧИТЕЛЯ, только `const processPath` я включил внутрь `const resultPromise` ===
// const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

// export const getTypes = (filesPath) => {
//   const resultPromise = filesPath.reduce(
//     (promise, filepath) => promise.then((result) => {
//       return fsp.stat(filepath)
//         .then((data) => [...result, getTypeName(data)])
//         .catch(() => [...result, null]);
//     }),
//     Promise.resolve([]),
//   );
//   return resultPromise;
// };
// ==============================================================






// ======= МОЯ ИНТЕРПРЕТАЦИЯ РЕШЕНИЯ УЧИТЕЛЯ ==============
export const getTypes = (filesPath) => {
  const resultPromise = filesPath.reduce(
    (acc, path) => acc.then((result) => fsp.stat(path)
      .then((data) => [...result, data.isDirectory() ? 'directory' : 'file'])
      .catch(() => [...result, null])),
    Promise.resolve([]),
  );

  return resultPromise;
};
// ========================================================

// ------------ MY TESTS ------------
const path1 = 'JS/-staff/files-for-practice/file1.txt';
const path2 = 'JS/-staff';
const pathFinal = 'JS/-staff/files-for-practice/RESULT.txt';

getTypes([path1, path2, 'non-existed-path']).then(console.log);
