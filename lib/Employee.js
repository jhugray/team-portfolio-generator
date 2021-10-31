const inquirer = require('inquirer');
const generateHTML = require('../src/generateHTML.js');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
    return "Employee"
  }
}

module.exports = Employee;

