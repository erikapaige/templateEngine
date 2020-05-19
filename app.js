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
console.log('This is a template to generate information about your team. Use it to create your engineering team.')

// questions to ask about roles in company
//manager questions
let managerQuestions = () => {
  prompt([
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
  ])
}


//switch case of different employee scenarios
const newEmployee = () => {
  prompt([
    {
      type: 'list',
      name: 'position',
      message: 'Employee Position:',
      choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    }
  ])
    .then(employee => {
      //check to make sure data working
      // console.log(employee)
      switch (employee.team) {
        case 'Manager':
          managerQuestions()
          break
        case 'Engineer':
          engineerQuestions()
          break
        case 'Intern':
          internQuestions()
          break
          writeFileSync('team.html', 'utf8')
      }
    })
    .catch(err => console.log(err))
}

newEmployee()

//engineer questions
let engineerQuestions = () => {
  prompt([
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
  ])
}

//intern question
let internQuestions = () => {
  prompt([
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
  ])
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
}
