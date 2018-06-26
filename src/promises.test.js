test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('penut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => {
    expect(e).toMatch('error');
  });
});

test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('penut butter');
  });
});

test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});
