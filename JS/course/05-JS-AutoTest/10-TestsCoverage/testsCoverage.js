// v1
// BEGIN (write your solution here)
describe('geDaysInMonth:', () => {
  it('wrong month:', () => {
    expect(get(0, 2000)).toBeNull();
    expect(get(13, 2000)).toBeNull();
  });

  it('is long February?', () => {
    expect(get(2, 2000)).toBe(29);
    expect(get(2, 2001)).toBe(28);
  });

  it('is it 30 or 31 days in this month?', () => {
    expect(get(3, 2000)).toBe(31);
  });
});
// END

// v2, but not working from `describe('is it 30 or 31 days in this month?'`
// // BEGIN (write your solution here)
// describe('geDaysInMonth:', () => {
//   it('wrong month: ', () => {
//     expect(get(0, 2000)).toBeNull();
//     expect(get(13, 2000)).toBeNull();
//   });

//   it('is long February?', () => {
//     expect(get(2, 2000)).toBe(29);
//     expect(get(2, 2001)).toBe(28);
//   });
// });

// const cases = [[6, 2000], [9, 2000], [11, 2000]];

// describe('is it 30 or 31 days in this month?', () => {
//   test.each(cases)('checking 30-days months: ',
//   (firstArg, secondArg, expectedResult) => {
//     const result = get(firstArg, secondArg);
//     expect(result).toEqual(expectedResult);
//   });
// });

// // END
