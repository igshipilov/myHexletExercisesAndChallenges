// @ts-ignore

import _ from 'lodash';
import trees from '../__fixtures__/index.js';
import changeClass from '../changeClass.js';

test.each(trees)('changeClass', (treeData) => {
  const {
    htmlTreeSource,
    htmlTree,
    classNameFrom,
    classNameTo,
  } = treeData;
  const sourceCloned = _.cloneDeep(htmlTreeSource);

  const result = changeClass(htmlTreeSource, classNameFrom, classNameTo);
  expect(result).toEqual(htmlTree);
  expect(htmlTreeSource).toEqual(sourceCloned);
});
