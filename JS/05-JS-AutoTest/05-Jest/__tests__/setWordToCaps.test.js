import { setCaps } from '../src/setWordToCaps.js';

const callback = () => expect(setCaps('foo')).toEqual('FOO');

test('all letters should became caps:', callback);

// test('all letters should became caps:', () => {
//   expect(setCaps('foo')).toEqual('FOO');
//   expect(setCaps('bar')).toEqual('BAR');
//   expect(setCaps('')).toEqual('');
// });
