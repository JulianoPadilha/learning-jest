test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});