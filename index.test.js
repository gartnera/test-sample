const { length } = require('./index');

test('length("asdf") == 4', () => {
  expect(length('asdf')).toBe(4);
});

test('length("asdfasdf") == 8', () => {
  expect(length('asdfasdf')).toBe(8);
});

test('length("asdfasdfasdf") == 12', () => {
  expect(length('asdfasdfasdf')).toBe(12);
});
