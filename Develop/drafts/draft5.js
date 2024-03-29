//node pkg: file save system
const { writeFile, appendFile, readFile } = require('fs')
//npm package 'inquirer'
const { prompt } = require('inquirer')
const { promisify } = require('util')
//npm package html-render
const htmlRender = require('html-render')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)


//bring in constructors
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

let employee = []

// prompt the user  build an engineering team 
console.log('This is a template to generate information about your team. Use it to create your engineering team.')

// questions to ask about roles in company
//manager questions
let managerQuestions = () =>{
  prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'managerPhone',
      message: 'Office Phone Number:'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Employee ID:'
    }
  ])
  .then()
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
    .then(({ position }) => {
      //check to make sure data working
      // console.log(employee)
      switch (position) {
        case 'Manager':
          managerQuestions()
          break
        case 'Engineer':
          engineerQuestions()
          break
        case 'Intern':
          internQuestions()
          break
        case 'Complete':
          htmlRender(employeeArray)
          break  
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
      name: 'engineerName',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Github Username:'
    }
  ])
    .then(({ engineerName, engineerEmail, engineerId, engineerGithub }) =>{
    let engineer = new Engineer(engineerName, engineerEmail, engineerId, engineerGithub)
    employee.push(engineer)
    })
    .catch (err => console.log(err))
}

//intern question 
let internQuestions = () => {
  prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Name of School:'
    }
  ])
  //consologging malformed arrow and vars aren't defined
    .then(({ internName, internEmail, internId, internSchool }) => {
    let intern = new Intern(internName, internEmail, internId, internSchool)
    employee.push(intern)
    })
    .catch(err => console.log(err))
}

// function newEmployee()
  //have option to exit