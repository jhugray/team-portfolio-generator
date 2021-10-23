const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('creates an Managerobject', () => {
  const employee = new Manager('Jess', 1, 'jess@email.com');
  expect(employee.name).toEqual(expect.any(String))
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String))
});