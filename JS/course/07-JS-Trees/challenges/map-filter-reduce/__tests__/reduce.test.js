// @ts-ignore

import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { reduce } from '../solution.js';

test('reduce 1', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const actual = reduce((acc) => acc + 1, tree, 0);
  expect(actual).toEqual(6);

  const actual2 = reduce((acc, n) => (n.type === 'file' ? acc + 1 : acc), tree, 0);
  expect(actual2).toEqual(2);

  const actual3 = reduce((acc, n) => (n.type === 'directory' ? acc + 1 : acc), tree, 0);
  expect(actual3).toEqual(4);
});
