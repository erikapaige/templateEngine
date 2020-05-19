//node pkg: file save system
const { writeFile, appendFile, readFile } = require('fs')
//npm package 'inquirer'
const { prompt } = require('inquirer')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

//bring in constructors
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')


// prompt the user  build an engineering team 
console.log('This is a template to generate information about your team. Use it to create your Engineering')

// ask questions about roles in company


//manager questions
let managerQuestions = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'Name:'
  },
  {
    type: 'input',
    name: 'managerPhone',
    message: 'Office Phone Number:'
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: 'Email Address:'
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Employee ID:'
  }
]

//engineer questions
let engineerQuestions = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'Name:'
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: 'Email Address:'
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Employee ID:'
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'Github Username:'
  }
]

//intern question
let internQuestion = [ 
  {
    type: 'input',
    name: 'employeeName',
    message: 'Name:'
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: 'Email Address:'
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Employee ID:'
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'Name of School:'
  }
]

//switch case of different employee scenarios

function newEmployee () {
  prompt([
    {
    type: 'list',
    name: 'position',
    message: `Employee's Position:`,
    choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    }])
    .then(employee => {
      switch (employee.team)
        case 'Manager':
          break
        case 'Engineer':
          break
        case 'Intern':
          break   
    }

      .catch(err => console.log(err))
}

  //have option to exit