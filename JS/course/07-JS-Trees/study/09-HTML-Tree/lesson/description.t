### Шаги 10 и 11

Посмотрим на кусочек функции, описывающий `.map()`:
```
const filterEmpty = (tree) => {
  const filtered = tree.children
    .map((node) => {
      if (node.type === 'tag-internal') {
        return filterEmpty(node);
      }

      return node;
    })
    .filter((node) => {...})
```

Кажется, будто мы переходим к `.filter()` ещё до того, как `.map()` отработал полностью.
Но на самом деле это не так: `.map()` завершается внутри рекурсивного вызова функции
и только потом запускается `.filter()`. Нарушения правил не происходит.


Как это выглядит

Когда внутрь рекурсивного вызова функции мы передаём `node`:
```
if (node.type === 'tag-internal') {
  return filterEmpty(node); // рекурсивный вызов функции
}
```

то `map()` итерирует только один этот `node`, а у него есть только один `child` –
так, в определённый момент в него приходит вот этот ребёнок:
```
{
  type: 'text',
  content: 'Сообщество',
},
```

Поэтому на текущем уровне вложенности рекурсии метод `.map()` полностью отработал
и теперь наступает очередь следующего метода:
`.filter()` – он применяется к этому же `node`, который:
```
{
  type: 'text',
  content: 'Сообщество',
},
```



### Что делает метод `.filter()`?

Он просто решает, кто из детей останется.
Этот метод такой объёмный только лишь потому, что в нём прописаны разные условия возврата
для нескольких разных типов.

А суть всего метода одна: оставить в массиве только тех детей, кто выдал `true`.



### Финал

```
return { ...tree, children: filtered };
```

Мы доберёмся до этого `return` только один раз: после того,
как полностью отработают `.map()` и `.filter()`.

Таким образом от первоначального дерева гарантированно (!) останется только:

```
{
  name: 'html',
  type: 'tag-internal',
  children: [...]
}
```

а вот содержимое `children: [...]` заменится
результатами работы методов `.map()` и `.filter()`.




### Первоначальное дерево

const htmlTree = {
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