// @ts-ignore
// https://ru.hexlet.io/courses/js-trees/lessons/calculate/exercise_unit

import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

// ПОДСКАЗКИ

// # Как отсортировать пары массивов? Отсортировать объект и вернуть пары массивов:
// items.sort((a, b) => a.value - b.value);
// items.map((item) => Object.values(item))

// BEGIN (write your solution here)ˇ
const calcFilesSize = (node) => {
  if (isFile(node)) {
    return getMeta(node).size;
  }

  const children = getChildren(node);
  const childrenSizes = children.map(calcFilesSize);
  return _.sum(childrenSizes);
};

const du = (node) => {
  const children = getChildren(node);
  return children.map((child) => [getName(child), calcFilesSize(child)])
    .sort(([, size1], [, size2]) => size2 - size1);
};

export default du;
// END

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

// console.log('\n\n');
// console.log(getChildrenNames(tree));

// console.log('\n\n');
// console.log(getSumSize(tree));

console.log('\n\n');
console.log(du(tree));

// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]

console.log('\n\n');
console.log(du(getChildren(tree)[0]));
