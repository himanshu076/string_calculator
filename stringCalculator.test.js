const { add } = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns the number for a single number', () => {
  expect(add('1')).toBe(1);
});

test('returns the sum for two numbers', () => {
  expect(add('1,5')).toBe(6);
});

test('returns the sum for numbers with new lines', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('handles custom delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('throws an exception for negative numbers', () => {
  expect(() => add('1,-2')).toThrow('negative numbers not allowed: -2');
});

test('throws an exception for multiple negative numbers', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2, -3');
});
