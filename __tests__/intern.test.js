// Jest tests
const Intern = require('./lib/Intern')

test('accepts new intern', () => {
  const employee = new Intern ('Alicia Vega', 2345, 'alicia@gmail.com', 'UA');
  expect(employee.name).toBe('Alicia Vega');
  expect(employee.id).toEqual(any(Number));
  expect(employee.email).toContain('@')
  expect(employee.school).toBe('UA')
});