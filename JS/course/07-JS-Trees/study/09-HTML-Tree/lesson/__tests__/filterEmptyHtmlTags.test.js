import { filterEmpty, htmlTree, buildHtml } from '../filterEmptyHtmlTags.js';

const initialTree = htmlTree;

test('filterEmptyHtmlTags', () => {
  const expected = {
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
        ],
      },
    ],
  };
  expect(filterEmpty(initialTree)).toMatchObject(expected);
});

test('buildHtml', () => {
  const expected = '<html><body><h1>Сообщество</h1><p>Общение между пользователями Хекслета</p><hr><input></body></html>';
  const filteredTree = filterEmpty(initialTree);
  expect(buildHtml(filteredTree)).toEqual(expected);
});
