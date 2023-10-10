import _ from 'lodash';

/*

ЗАДАЧА

Функция принимает на вход html-дерево и заменяет во всех узлах имя класса,
имена классов передаются через параметры. Функция не должна мутировать исходное дерево.

АЛГОРИТМ

Смотрим каждую ноду дерева:
  - Если у этой ноды есть свойство `className`, то:
    -- если ли его значение совпадает с аргументом `oldClass`, то заменить значение на `newClass`
    -- иначе вернуть текущее значение

Как смотреть каждую ноду?
  - Чтобы итерировать детей нужен `.map()`

Какой у нас базовый случай?
  - Рекурсия завершается, когда `.map()` завершает свою работу

*/

// ============= MY =====================
// const changeClass = (tree, oldClass, newClass) => {
//   const clonedTree = _.cloneDeep(tree);

//   const iter = (node, oldC, newC) => {
//     let { className } = node;
//     const { children } = node;

//     if (className) {
//       node.className = node.className === oldC ? node.className = newC : node.className;
//     }
//     let result = [];
//     if (children && children.length > 0) {
//       result = children.map((child) => iter(child, oldC, newC));
//     }

//     return node;
//   };

//   return iter(clonedTree, oldClass, newClass);
// };
// ======================================

// ============= TEACHER =====================
const changeClass = (tree, oldClass, newClass) => {
  const innerFunc = (node) => {
    const updatedNode = { ...node };

    if (_.has(node, 'className')) {
      const newClassName = node.className === oldClass ? newClass : node.className;
      updatedNode.className = newClassName;
    }

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map(innerFunc);
      updatedNode.children = newChildren;
    }

    return updatedNode;
  };

  return innerFunc(tree);
};

// ===========================================

export default changeClass;

const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'hexlet-community',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};

const htmlTreeSource = {
  name: 'html',
  type: 'tag-internal',
  children: [
    {
      name: 'body',
      type: 'tag-internal',
      children: [
        {
          name: 'h1',
          type: 'tag-internal',
          children: [
            {
              name: '',
              type: 'text',
              content: 'Сообщество',
            },
          ],
        },
        {
          name: 'p',
          type: 'tag-internal',
          children: [
            {
              type: 'text',
              content: 'Общение между пользователями Хекслета',
            },
          ],
        },
        {
          name: 'hr',
          className: 'hexlet-community',
          type: 'tag-leaf',
        },
        {
          name: 'input',
          className: 'some-class',
          type: 'tag-leaf',
        },
        {
          name: 'div',
          type: 'tag-internal',
          className: 'hexlet-community',
          children: [
            {
              name: 'div',
              type: 'tag-internal',
              className: 'text-xs-center',
              children: [],
            },
            {
              name: 'div',
              type: 'tag-internal',
              className: 'fa fa-spinner',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// const result = changeClass(htmlTreeSource, 'old-class', 'new-class');
// console.log(JSON.stringify(result, null, ' '));
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
