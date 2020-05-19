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
console.log('This is a template to generate information about your team.')

// ask questions about roles in company
//employee questions
let employeeQuestions = [
  {
    type: 'input',
    name: 'employeeName',
    message: 'Name:'
  },
  {
    type: 'list',
    name: 'position',
    message: `Employee's Position:`,
    choices: ['Manager', 'Engineer', 'Employee', 'Intern']
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

//manager questions
let managerQuestions = [
  {
    type: 'input',
    name: 'managerPhone',
    message: 'Office Phone Number:'
  }
  // {
  //   type: 'list',
  //   name: 'optionToAdd',
  //   message: 'Would you like to add another employee?'
  //   choices: ['Yes', 'No']
  // }
]
//engineer questions
let engineerQuestions = [
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
    name: 'internSchool',
    message: 'Name of School:'
  }
]

init()

//switch case of different employee scenarios

function init () {
  prompt(employeeQuestions)
    .then (response => {
      //test for employeeQuestions
      // console.log(response)

      let response 

    })
      .catch(err => console.log(err))
}

  //have option to exit