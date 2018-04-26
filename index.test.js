const { length, mergeMaps } = require('./index');

test('length("asdf") == 4', () => {
  expect(length('asdf')).toBe(4);
});

test('length("asdfasdf") == 8', () => {
  expect(length('asdfasdf')).toBe(8);
});

test('length("asdfasdfasdf") == 12', () => {
  expect(length('asdfasdfasdf')).toBe(12);
});

describe('mergeMaps()', () => {
  test('empty objects', () => {
    const a = {};
    const b = {};

    expect(mergeMaps(a, b)).toEqual({});
  });

  test('simple objects', () => {
    const a = { a: 10 };
    const b = { b: 20 };

    const res = {
      a: 10,
      b: 20,
    };

    expect(mergeMaps(a, b)).toEqual(res);
  });

  test('duplicated keys', () => {
    const a = { a: 10 };
    const b = { a: 30 };

    const res = {
      a: 30,
    };

    expect(mergeMaps(a, b)).toEqual(res);
  });
});
