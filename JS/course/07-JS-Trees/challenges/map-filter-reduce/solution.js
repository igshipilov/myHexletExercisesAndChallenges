// https://ru.hexlet.io/challenges/js_trees_map_filter_reduce_exercise/instance


/*


ВОПРОС

Код из последнего теста функции `filter`:

```
test('filter 2', () => {
  const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('nginx', [
        mkdir('conf.d'),
      ]),
      mkdir('consul', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hosts'),
  ]);
  const names = new Set(['/', 'hosts', 'etc', 'consul']);
  const actual = filter((n) => names.has(n.name), tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
      {
        name: 'hosts',
        meta: {},
        type: 'file',
      },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };
  expect(actual).toEqual(expected);
});
```

Здесь дано такое дерево:
```
{
 "name": "/",
 "children": [
  {
   "name": "etc",
   "children": [
    {
     "name": "nginx",
     "children": [
      {
       "name": "conf.d",
       "children": [],
       "meta": {},
       "type": "directory"
      }
     ],
     "meta": {},
     "type": "directory"
    },
    {
     "name": "consul",
     "children": [
      null
     ],
     "meta": {},
     "type": "directory"
    }
   ],
   "meta": {},
   "type": "directory"
  },
  null
 ],
 "meta": {},
 "type": "directory"
}
```

*/

import {
  mkfile, mkdir, getName, isFile, isDirectory, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';


// const simpleMap = (arr) => {

// };

// const map = (fn, tree) => {
//   const newTree = _.cloneDeep(tree);
//   const children = getChildren(tree);
//   fn(newTree);

//   if (children) {
//     const result = children.map((node) => map(fn, node));

//     return result;
//   }

//   return { ...tree, children: result };
// };

const map = (fn, tree) => {
  const children = getChildren(tree);
  const result = fn(tree);
  const newChildren = children.map((node) => {
    if (node.children) {
      return map(fn, node);
    }
    if (fn(node)) {
      return node
    }
  });
  
  return { ...result, children: newChildren };
};

const filter = (fn, tree) => {
};

// const filter = (fn, tree) => {
//   const children = getChildren(tree);
//   const newTree = fn(tree) ? tree : '';
//   const newChildren = children.map((node) => {
//     if (node.children) {
//       return filter(fn, node);
//     }
//     // return fn(node) ? true : false;
//   });
  
//   return { ...newTree, children: newChildren };
// };


// const filter = (fn, tree) => {
//   const children = getChildren(tree);
//   const result = fn(tree);
//   const newChildren = children.map((node) => {
//     if (node.children) {
//       return filter(fn, node);
//     }
//     if (fn(node)) {
//       return node
//     }
//   });
  
//   return { ...tree, children: newChildren };
// };



const reduce = (fn, tree, acc) => {
  const children = getChildren(tree);
  const result = children.reduce((accum, node) => {
    if (fn(node))
  });


  return fn(acc, tree);
};

// const arr = [1, 2, 3, 4];
// const isEven = (num) => num % 2 === 0;

// console.log(`\n\n`);
// console.log(filter(isEven, arr)); // [2, 4]


// const tree = mkdir('/root', [
//   mkdir('eTc', [
//     mkfile('config.json'),
//   ]),
// ]);


const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);


// console.log('\n\n');
// console.log('>> original tree: ');
// console.log(JSON.stringify(tree, null, ' '));


// Приводим имена всех директорий и файлов к верхнему регистру:

// console.log('\n\n');
// console.log('>> map: ');
// console.log(JSON.stringify(
//   map((n) => ({ ...n, name: getName(n).toUpperCase() }), tree),
//   null,
//   ' ',
// ));

// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//     },
//   ],
// }


// Отфильтровываем директории:

// console.log('\n\n');
// console.log('>> filter: ');
// console.log(JSON.stringify(
//   filter((n) => isDirectory(n), tree),
//   null,
//   ' ',
// ));

// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [],
//     },
//   ],
// }


// Подсчитываем количество узлов в дереве:

// console.log('\n\n');
// console.log('>> reduce: ');
// console.log(JSON.stringify(
//   reduce((acc, n) => acc + 1, tree, 0),
//   null,
//   ' ',
// )); // 3

export { map, filter, reduce };
