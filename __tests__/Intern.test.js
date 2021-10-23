const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('creates an Internobject', () => {
  const employee = new Intern('Jess', 1, 'jess@email.com');
  expect(employee.name).toEqual(expect.any(String))
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String))
});