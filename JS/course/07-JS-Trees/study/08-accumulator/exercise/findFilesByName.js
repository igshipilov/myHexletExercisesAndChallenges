//  https://ru.hexlet.io/courses/js-trees/lessons/accumulator/exercise_unit

import path from 'path';
import {
  mkdir, mkfile, isFile, isDirectory, getName, getChildren,
} from '@hexlet/immutable-fs-trees';

// ЗАДАЧА

// Вернуть полные пути до файлов,
// в именах которых содержится переданная подстрока.

// Создаём переменную `ancestry` – в неё записываем путь до файла
// Это массив, наполняемый строками.
// В него записываем название текущей директории.

// Если текущий элемент – файл,
//  то проверить его имя: name.includes(searchText)?
// если да, то
//  1. добавить в `ancestry` имя текущего файла
//  2. вернуть `path.join(...ancestry)`

/*

const arr = ['a', 'b', 'c'];
console.log(path.join(...arr)); // 'a/b/c'

Например, ищем совпадение по подстроке 'ear', получаем вывод в таком формате:
`['/dir1/dir2/searchFile1.ext', '/dir1/dir3/dir4/dearFile2.conf']`

Задаём условие: имя текущей ноды содержит искомый текст?
Смотрим текущую ноду
  - Если она файл, то запускаем проверку условия
  - Если она директория, то проверяем её детей:
    - записываем её имя
    - каждый child проверяем по первому шагу (если файл, то запускаем проверку условия)

ПОДСКАЗКИ
  1. Вместо массива `acc` делаем так: `path.join(ancestry, name)`
  2. В какой-то момент надо создавать `newAncestry`
  и затем `path.join(newAncestry, name)`

*/

// ============= MY - working ============
const findFilesByName = (tree, searchText) => {
  const iter = (node, ancestry) => {
    const nodeName = getName(node);
    const newAncestry = path.join(ancestry, nodeName);
    if (isFile(node)) {
      return nodeName.includes(searchText) ? newAncestry : [];
    }

    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };

  const result = iter(tree, '');

  return result;
};
// ======================================

// ========== V1 - not working ==========

// const findFilesByName = (node, searchText) => {

//   const iter = (node, acc) => {
//     const nodeName = getName(node);
//     const children = getChildren(node);

//     if (isFile(node)) {
//       return nodeName.includes(searchText) ? [path.join(...acc)] : [];
//     }

//     acc.push(nodeName);
//     return children.flatMap((child) => iter(child, acc));

//   }
//   const result = iter(node, []);

//   return result;
// };

// ======================================

// ====== V1 - fixed by Sergey Shalygin ======

// const findFilesByName = (root, searchText) => {

//   const iter = (node, ancestry) => {
//     const nodeName = getName(node);
//     const children = getChildren(node);

//     if (isFile(node)) {
//       return nodeName.includes(searchText) ? [path.join(ancestry, nodeName)] : [];
//       // return nodeName.includes(searchText) ? [path.join(ancestry, nodeName)] : [];
//     }

//     const newAncestry = path.join(ancestry, nodeName);
//     return children.flatMap((child) => iter(child, newAncestry));
//   }

//   const result = iter(root, '');

//   return result;
// };

// ======================================

// ========== V2 - not working ==========

// const findFilesByName = (node, searchText) => {
//   const nodeName = getName(node);

//   const iter = (node, ancestry) => {
//     const nodeName = getName(node);
//     const children = getChildren(node);

//     const isFileNode = isFile(node); // debugging
//     if (isFile(node)) {
//       return nodeName.includes(searchText) ? path.join(`${ancestry}`, `${nodeName}`) : [];
//     }

//     const isChildrenLengthZero = children.length === 0; // debugging
//     if (children.length === 0) {
//       return [];
//     } else {
//       const result = children.flatMap((child) => iter(child, nodeName));

//       return path.join(`${ancestry}`, `${result}`);
//     }
//   };

//   const result = iter(node, '');

//   return result;
// };

// ======================================

// ПРОСТОЕ ДЕРЕВО
// const tree = mkdir('/', [
//   mkdir('DIR-nginx', [
//       mkfile('FILE-nginx.conf', { size: 800 }),
//     ]),
//   mkdir('DIR-etc', [
//     mkfile('FILE-etc.conf', { size: 800 }),
//   ]),
//   mkdir('DIR-empty'),
// ]);

// СЛОЖНОЕ ДЕРЕВО
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log('\n\n>> Исходное дерево:\n');
console.log(tree);

console.log('\n\n>> Результат:\n');
console.log(findFilesByName(tree, 'co'));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']

export default findFilesByName;
