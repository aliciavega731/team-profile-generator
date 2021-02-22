// Jest tests
const Engineer = require('./lib/Engineer')

test('accepts new engineer', () => {
  const employee = new Engineer ('Alicia Vega', 2345, 'alicia@gmail.com', 'alicia134');
  expect(employee.name).toBe('Alicia Vega');
  expect(employee.id).toEqual(any(Number));
  expect(employee.email).toContain('@')
  expect(employee.github).toBe('alicia134')
});