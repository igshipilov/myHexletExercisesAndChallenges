import _ from 'lodash';
import {
  mkdir, mkfile, isFile, isDirectory, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkdir('ONE EMPTY'),
  mkdir('TWO NOT EMPTY', [
    mkdir('TWO-INNER', []),
  ]),
  mkfile('hosts'),
]);

// ЗАДАЧА

// Вернуть имена пустых директорий

// Простая версия – без глубины
const findEmptyDirNames = (tree) => {
  const children = getChildren(tree);
  const name = getName(tree);

  if (isDirectory(tree)) {
    if (children.length === 0) {
      return name;
    }
    const emptyDirNames = children
      .filter(isDirectory)
      .flatMap(findEmptyFiles);
    return emptyDirNames;
  }
};

// console.log(`\n\n`);;
// console.log(findEmptyDirNames(tree)); // [ 'apache', 'data', 'logs', 'ONE EMPTY', 'TWO-INNER' ]

// Версия сложнее: глубина ограничивается внутренней функцией
const findEmptyDirPaths = (node) => {
  const maxDepth = 2;

  const iter = (node, depth) => {
    const children = getChildren(node);
    const nodeName = getName(node);

    if (children.length === 0) {
      return nodeName;
    }
    if (depth === maxDepth) {
      return [];
    }

    const emptyDirNames = children.filter((child) => isDirectory(child))
      .flatMap((child) => iter(child, depth + 1));

    return emptyDirNames;
  };

  return iter(node, 0);
};

console.log('\n\n');
console.log(findEmptyDirPaths(tree));
