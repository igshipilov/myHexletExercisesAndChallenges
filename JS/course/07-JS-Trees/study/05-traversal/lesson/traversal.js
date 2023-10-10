import {
  mkdir, mkfile, getName, getMeta, getChildren, isFile,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

/*

Написать функцию смены значения ключа `owner` в метадатах всего дерева:
в мета корневой директории, в мета всех детей-поддиректорий и детей-файлов.

*/

const tree = mkdir(
  '/',
  [
    mkdir(
      'etc',
      [],
      { owner: 'someUser' },
    ),
    mkfile('hexletrc'),
    mkdir(
      'bin',
      [
        mkfile(
          'cat',
          { owner: 'someUser' },
        ),

      ],
      { owner: 'someUser' },
    ),
  ],
  { owner: 'someUser' },
);

export const changeOwner = (node, newOwner) => {
  const newName = getName(node);
  const newMeta = _.cloneDeep(getMeta(node));
  newMeta.owner = newOwner;

  if (isFile(node)) {
    return mkfile(newName, newMeta);
  }

  const children = getChildren(node);
  const newChildren = children.map((child) => changeOwner(child, newOwner));

  return mkdir(newName, newChildren, newMeta);
};

console.log('\n\n');
console.log(`>> Изначальный объект:

${JSON.stringify(tree, null, ' ')}`);

console.log('\n\n');
console.log(`>> Результат:

${JSON.stringify(changeOwner(tree, 'me'), null, ' ')}`);
