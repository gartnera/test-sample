const length = require('./index').length;

test('length("asdf") == 4', () => {
  expect(length('asdf')).toBe(4);
});

test('length("asdfasdf") == 8', () => {
  expect(length('asdfasdf')).toBe(8);
});
