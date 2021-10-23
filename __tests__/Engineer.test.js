const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('creates an engineerobject', () => {
  const employee = new Engineer('Jess', 1, 'jess@email.com');
  expect(employee.name).toEqual(expect.any(String))
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String))
});