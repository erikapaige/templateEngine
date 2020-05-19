//node pkg: file save system
const { writeFile, appendFile } = require('fs')
//npm package 'inquirer
const { prompt } = require('inquirer')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

//bring in constructors
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

console.log('This is a template to generate information about your team. Use it to create your Engineering')

//switch case of different employee scenarios
//takes in input from the employee
const employee = () => [
    {
      type: 'input',
      name: 'employeeName',
      message: 'Name:'
    },
    {
      type: 'list',
      name: 'position',
      message: 'employeeTitle:',
      choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'Employee ID:'
    }]
employee()
//   ])
// }