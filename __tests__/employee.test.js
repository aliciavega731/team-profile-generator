// Jest tests
const Employee = require('./lib/Employee')

test('accepts new employee', () => {
  const employee = new Employee ('Alicia Vega', 2345, 'alicia@gmail.com');
  expect(employee.name).toBe('Alicia Vega');
  expect(employee.id).toEqual(any(Number));
  expect(employee.id).toContain('@')
});
