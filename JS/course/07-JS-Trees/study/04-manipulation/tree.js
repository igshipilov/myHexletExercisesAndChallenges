// https://ru.hexlet.io/courses/js-trees/lessons/manipulations/exercise_unit

import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

/*

ЗАДАНИЕ
Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию,
находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства size
в метаданных в два раза. Функция должна вернуть новую директорию со сжатыми картинками
и всеми остальными данными, которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на .jpg.

# Алгоритм

Если `child` это файл, то создать новый файл (клонировать текущий `child`)

*/

const getClonedMeta = (obj) => _.cloneDeep(trees.getMeta(obj));

const isJPG = (obj) => trees.getName(obj).includes('.jpg');
const isFile = (obj) => trees.isFile(obj);

const compressRatio = 2;

const makeCompressed = (obj) => {
  if (isFile(obj) && isJPG(obj)) {
    const childName = trees.getName(obj);
    const childMeta = getClonedMeta(obj);
    childMeta.size /= compressRatio;

    return trees.mkfile(childName, childMeta);
  }
  return obj;
};

export const compressImages = (tree) => {
  const newChildren = trees.getChildren(tree).map(makeCompressed);

  const treeName = trees.getName(tree);
  const treeMeta = getClonedMeta(tree);
  const tree2 = trees.mkdir(treeName, newChildren, treeMeta);

  return tree2;
};

const tree = trees.mkdir('my documents', [
  trees.mkdir('documents.jpg'),
  trees.mkfile('avatar.jpg', { size: 100 }),
  trees.mkfile('passport.jpg', { size: 200 }),
  trees.mkfile('family.jpg', { size: 150 }),
  trees.mkfile('addresses', { size: 125 }),
  trees.mkdir('presentations'),
], { test: 'haha' });

console.log('\n\n');
console.log(compressImages(tree));

console.log('\n\n');
console.log(tree);
console.log();
console.log(compressImages(tree));
