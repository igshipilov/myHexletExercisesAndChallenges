import {
  mkdir, mkfile, getName, getMeta, getChildren, isFile, isDirectory,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

// ЗАДАЧА
// Функция `getSubdirectoriesInfo()` выводит массив, в котором заключены пары:
// - имя директории первого уровня
// - количество файлов в ней и в её поддиректориях

// Для этого:
// - перебираем всех детей входящей ноды (корневого каталога)
// - к каждому ребёнку применяем функцию подсчёта всех файлов в нём

const countFiles = (node) => {
  if (isFile(node)) {
    return 1;
  }

  const children = getChildren(node);
  const files = children.map(countFiles);

  return _.sum(files);
};

// console.log(`\n\n`)
// console.log(countFiles(tree));

const getSubdirectoriesInfo = (node) => {
  const children = getChildren(node);

  const firstLevelDirectories = children
    .filter(isDirectory)
    .map((child) => [getName(child), countFiles(child)]);

  return firstLevelDirectories;
};

console.log('\n\n');
console.log(getSubdirectoriesInfo(tree));
// => [['etc', 1], ['consul', 2]]
