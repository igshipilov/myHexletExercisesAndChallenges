// @ts-ignore
import {
  mkdir, mkfile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import { changeOwner } from '../traversal.js';

test('changeOwner', () => {
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
          mkfile('cat'),
        ],
        { owner: 'someUser' },
      ),
    ],
    { owner: 'someUser' },
  );

  const newTree = changeOwner(tree, 'me');

  const expectation = {
    name: '/',
    children: [
      {
        name: 'etc',
        children: [],
        meta: {
          owner: 'me',
        },
        type: 'directory',
      },
      {
        name: 'hexletrc',
        meta: {},
        type: 'file',
      },
      {
        name: 'bin',
        children: [
          {
            name: 'cat',
            meta: {
              owner: 'me',
            },
            type: 'file',
          },
        ],
        meta: {
          owner: 'me',
        },
        type: 'directory',
      },
    ],
    meta: {
      owner: 'me',
    },
    type: 'directory',
  };

  expect(newTree).toMatchObject(expectation);
});
