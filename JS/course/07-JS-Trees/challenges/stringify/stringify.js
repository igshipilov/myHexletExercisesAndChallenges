import _ from 'lodash';

const stringify = (data, replacer = ' ', spaceCount = 1) => {
  const iter = (node, depth) => {
    if (!_.isPlainObject(node)) {
      return `${node}`;
    }

    const indentSize = spaceCount * depth;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spaceCount);

    const lines = Object.entries(node)
      .map(([key, value]) => {
        const result = `${currentIndent}${key}: ${iter(value, depth + 1)}`;

        return result;
      });

    return ['{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(data, 1);
};

export default stringify;

const data = { hello: 'world', is: true, nested: { count: 5 } };
console.log(stringify(data, '|-', 2));
// Символ, переданный вторым аргументом повторяется столько раз, сколько указано третьим аргументом.
// {
// |-|-hello: world
// |-|-is: true
// |-|-nested: {
// |-|-|-|-count: 5
// |-|-}
// }
