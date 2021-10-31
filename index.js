const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employeeArray = [];


function initialQuestion() {
return inquirer
  .prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to add an team member?',
      choices: ['Manager', 'Engineer', 'Intern', 'No, I am done!'],
      validate: nameRole => {
        if (nameRole) {
          return true; 
        } else {
          console.log('Please enter the role of the employee, or select none if you are done.');
          return false;
        }
      }
    },
  ])
  .then(data => {
    switch(data.role) {
      case "Manager":
        managerQuestions()
          .then(managerData => {
            employee = new Manager(data.name, data.id, data.email, managerData.officeNumber)
            console.log(employee)
            employeeArray.push(employee);
            portfolioGenerator();
  
          });
        break;
      case "Engineer":
        engineerQuestions()
          .then(engineerData => {
            employee = new Engineer(data.name, data.id, data.email, engineerData.github)
            console.log(employee)
            employeeArray.push(employee);
            portfolioGenerator();
          })
          
        break;
      case "Intern":
        console.log("we are inside the intern case");
        internQuestions()
          .then(internData => {
            employee = new Intern(data.name, data.id, data.email, internData.school)
            console.log(employee)
            employeeArray.push(employee);
            console.log("The interns are :" + JSON.stringify(employeeArray))
            portfolioGenerator()
          })
        break;
      case 'None, I am done!':
          console.log(data);
          console.log(generateHTML(data));
          const portfolio = generateHTML(data);
          fs.writeFile('portfolio.html', portfolio, err => {
            if (err) throw (err);
            console.log('Portfolio successfully generated!');
          }); 
        break;
      default:
        console.log("Error, something unexpected happened.")
    }
  
  });



}



function portfolioGenerator() {
  return inquirer
  //refactor to initially ask user if they wish to add a new team member, if yes, go through inquirer questions, 
  // if not, break, and then return employeeArray 
  .prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
    validate: nameInput => {  
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the name of the employee');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the ID of the employee?',
    validate: nameId => {  
      if (nameId) {
        return true;
      } else {
        console.log('Please enter the ID of the employee');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email of the employee?',
    validate: nameEmail => {  
      if (nameEmail) {
        return true;
      } else {
        console.log('Please enter the email of the employee');
        return false;
      }
    }
  },
  // {
  //   type: 'list',
  //   name: 'role',
  //   message: 'What is the role of the employee?',
  //   choices: ['Manager', 'Engineer', 'Intern'],
  //   validate: nameRole => {
  //     if (nameRole) {
  //       return true; 
  //     } else {
  //       console.log('Please enter the role of the employee');
  //       return false;
  //     }
  //   }
  // },
])
.then(data => {
  initialQuestion(data);
});
}
// portfolioGenerator()
// .then(data => {
//   switch(data.role) {
//     case "Manager":
//       managerQuestions()
//         .then(managerData => {
//           employee = new Manager(data.name, data.id, data.email, managerData.officeNumber)
//           console.log(employee)
//           employeeArray.push(employee);
//           // portfolioGenerator();

//         });
//       break;
//     case "Engineer":
//       engineerQuestions()
//         .then(engineerData => {
//           employee = new Engineer(data.name, data.id, data.email, engineerData.github)
//           console.log(employee)
//           employeeArray.push(employee);
//           // portfolioGenerator();
//         })
        
//       break;
//     case "Intern":
//       console.log("we are inside the intern case");
//       internQuestions()
//         .then(internData => {
//           employee = new Intern(data.name, data.id, data.email, internData.school)
//           console.log(employee)
//           employeeArray.push(employee);
//           console.log("The interns are :" + JSON.stringify(employeeArray))
//           // portfolioGenerator()
//         })
//       break;
//     default:
//       console.log("Error, something unexpected happened.")
//   }

// });

// portfolioGenerator();

function managerQuestions() {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number for the manager?',
      validate: nameOfficeNumber => {
        if (nameOfficeNumber) {
          return true;
        } else {
          console.log('Please enter the office number of the manager.');
          return false;
        }
      }
    }
  ]);
};

function engineerQuestions() {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'github',
      message: 'What is GitHub username for the engineer?',
      validate: nameGithub => {
        if (nameGithub) {
          return true;
        } else {
          console.log('Please enter the GitHub username of the engineer.');
          return false;
        }
      }
    }
  ]);
  
};

function internQuestions() {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'school',
      message: 'What school does the intern attend?',
      validate: nameSchool=> {
        if (nameSchool) {
          return true;
        } else {
          console.log('Please enter the school the intern attends.');
          return false;
        }
      }
    },
  ]);
}

// function portfolioInputComplete() {
//     .then(data => {
//       console.log(data);
//       // console.log(generateHTML(data));
//       const portfolio = generateHTML(data);
//       fs.writeFile('portfolio.html', portfolio, err => {
//         if (err) throw (err);
//         console.log('Portfolio successfully generated!');
//       });
//     })  
// }

initialQuestion();





//add function to ask if they wish to add another team member
//add array to store data, push new data to array
//create templated html
//keys?
//recursion 