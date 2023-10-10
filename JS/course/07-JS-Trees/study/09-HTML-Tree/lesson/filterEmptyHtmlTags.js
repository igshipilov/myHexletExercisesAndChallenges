// ЗАДАЧА
// Вернуть дерево без пустых элементов.
// Сейчас пустые все `div`

/*

У нас есть три типа (значение свойства `type`):
  - tag-internal
  - tag-leaf
  - text

Каждый считается пустым по-своему:
  - tag-internal
    Если все его дети пустые или если детей нет

  - tag-leaf
    Он физически не может быть ни пустым, ни полным,
    поэтому всегда возвращается — его не удаляем!

  - text
    Если ключ `content` пустой (str.length === 0)
*/

export const filterEmpty = (tree) => {
  const filtered = tree.children
    .map((node) => {
      if (node.type === 'tag-internal') {
        return filterEmpty(node);
      }

      return node;
    })
    .filter((node) => {
      const { type } = node;

      switch (type) {
        case 'tag-internal':
          const { children } = node;
          return children.length > 0;

        case 'tag-leaf':
          return true;

        case 'text': {
          const { content } = node;
          return !!content;
        }
      }
    });

  return { ...tree, children: filtered };
};
// console.log(JSON.stringify(filterEmpty(htmlTree), null, ' '));

/*

type:
  - tag-internal
    -- Всегда имеют закрывающий тег
    -- Некоторые имеют ключ `className`
        • пример записи в HTML: ` class='text-xs-center'`
    -- Всегда имеют ключ `children`, поэтому в HTML в них должны быть вложены другие элементы,
      поэтому используем рекурсию.

  - text
    -- Всегда имеют закрывающий тег
    -- Нет детей = нет вложенности

  - tag-leaf
    -- Не имеют закрывающего тега
    -- Нет детей = нет вложенности

*/

const buildClass = (node) => (node.className ? ` class=${node.className}` : '');

export const buildHtml = (node) => {
  const { type, name } = node;
  switch (type) {
    case 'tag-internal':
    {
      const childrenView = node.children.map(buildHtml).join('');

      return `<${name}${buildClass(node)}>${childrenView}</${name}>`;
    }

    case 'tag-leaf':
      return `<${name}>`;

    case 'text':
      return `${node.content}`;
  }
};

export const htmlTree = {
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
          type: 'tag-leaf',
        },
        {
          name: 'input',
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

const filteredTree = filterEmpty(htmlTree);

const html = buildHtml(filteredTree);

console.log(html);

// ОРИГИНАЛЬНОЕ ДЕРЕВО в HTML

// <html>
//   <body>
//     <h1>Сообщество</h1>
//     <p>Общение между пользователями Хекслета</p>
//     <hr>
//     <input>
//     <div class='hexlet-community'>
//       <div class='text-xs-center'></div>
//       <div class='fa fa-spinner'></div>
//     </div>
//   </body>
// </html>
