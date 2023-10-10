// @ts-ignore

import _ from 'lodash';
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { map } from '../solution.js';

test('immutable', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const original = _.cloneDeep(tree);

  map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);

  expect(tree).toEqual(original);
});

test('map 1', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);

  const actual = map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NGINX',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'CONFIG.JSON', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'ETC',
        type: 'directory',
      },
      { meta: {}, name: 'HOSTS', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});
