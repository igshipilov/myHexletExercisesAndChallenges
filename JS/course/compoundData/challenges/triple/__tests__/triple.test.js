// @ts-ignore
import {
  make,
  get1,
  get2,
  get3,
} from '../triple.js';

test('get1', () => {
  const triple = make(5, 6, 7);
  expect(get1(triple)).toBe(5);
});

test('get2', () => {
  const triple = make(5, 6, 7);
  expect(get2(triple)).toBe(6);
});

test('get3', () => {
  const triple = make(5, 6, 7);
  expect(get3(triple)).toBe(7);
});

test('triple', () => {
  const triple = make(1, 2, 3);
  expect(get1(triple)).toBe(1);
  expect(get2(triple)).toBe(2);
  expect(get3(triple)).toBe(3);
});

test('triple in triple', () => {
  const triple1 = make(14, 22, 32);
  const triple2 = make(11, 12, triple1);
  expect(get1(triple2)).toBe(11);
  expect(get2(triple2)).toBe(12);
  expect(get3(triple2)).toBe(triple1);
});

test('triple string', () => {
  const triple = make('str', 44);
  expect(get1(triple)).toBe('str');
  expect(get2(triple)).toBe(44);
  expect(get3(triple)).toBe(undefined);
});
