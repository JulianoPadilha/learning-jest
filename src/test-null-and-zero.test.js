test('null', () => {
  const n = null;
  expect(n).toBeNull(); 
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
});

test('zero', () => {
  const z = 0;
  expect(z).toBeDefined();
  expect(z).toBeFalsy();
  expect(z).not.toBeTruthy();
  expect(z).not.toBeNull();
  expect(z).not.toBeUndefined();
});