// @ts-check

import _ from 'lodash';
import {
  mkfile, mkdir, isFile, getName, getChildren,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const getHiddenFilesCount = (node) => {
  if (isFile(node)) {
    return getName(node).startsWith('.') ? 1 : 0;
  }

  const children = getChildren(node);
  const hiddenFilesCounts = children.map(getHiddenFilesCount);

  return _.sum(hiddenFilesCounts);
};

export default getHiddenFilesCount;
// END

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log('\n\n');
console.log(tree);

console.log('\n\n');
console.log(getHiddenFilesCount(tree));
