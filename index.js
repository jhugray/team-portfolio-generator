const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function portfolioGenerator() {

}

portfolioGenerator.prototype.getInfo = () => {
  inquirer
    .prompt ([
      {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      }
      .then(({ name }) => {
        this.employee = new Employee(name);
      })
    ])
}