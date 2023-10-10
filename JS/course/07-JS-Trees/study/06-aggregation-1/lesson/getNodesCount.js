import {
  mkdir, mkfile, getName, getMeta, getChildren, isFile,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

// Задача: посчитать количество всех директорий и файлов в дереве

const getNodesCount = (node) => {
  // Если текущая нода – это файл, значит она – лист, то есть дно дерева,
  // дальше тупик, останавливаем поиск
  if (isFile(node)) {
    return 1;
  }

  // Если текущая нода – это не файл, значит это директория, а у неё есть дети.
  // Дети директории записаны в массив, поэтому перезаписываем этот массив (не мутируя оригинал),
  // заменяя детей-объекты цифрами `1`
  const children = getChildren(node);
  const descendantCounts = children.map(getNodesCount);

  console.log(descendantCounts);

  // Каждый файл возвращает `1`, эти единицы записываются в массив
  // Мы делаем `1 + ...`, чтобы посчитать и директорию тоже
  return 1 + _.sum(descendantCounts);
};

console.log('\n\n');
console.log(getNodesCount(tree)); // 8
