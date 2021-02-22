// Jest tests
const Manager = require('./lib/Manager')

test('accepts new manager', () => {
  const employee = new Manager ('Alicia Vega', 2345, 'alicia@gmail.com', '482939295');
  expect(employee.name).toBe('Alicia Vega');
  expect(employee.id).toEqual(any(Number));
  expect(employee.email).toContain('@')
  expect(employee.officeNumber).toBe(any(Number))
});