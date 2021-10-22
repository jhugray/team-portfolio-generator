const inquirer = require('inquirer');
const generateHTML = require('../src/generateHTML.js');

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return console.log(`The employee's name is ${this.name}.`);
  }

  getId() {
    return console.log(`The employee's ID is ${this.id}.`);
  }
  
  getEmail() {
    return console.log(`The employee's email is ${this.email}.`);
  }

  getRole() {
    role = employee;
    return console.log(`The employee's role is ${this.employee}.`)
  }
}

module.exports = Employee;
