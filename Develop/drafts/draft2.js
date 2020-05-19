//node pkg: file save system
const { writeFile, appendFile } = require('fs')
//npm package 'inquirer
const { prompt } = require('inquirer')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

bring in constructors
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

//requests manager's office number
let getOfficeNumber = () =>{
  prompt({
    //list because need employee to select their position
    type: 'number',
    name: 'officeNum',
    message: 'Office Number:'
  })
}
// requests engineer's github username
let getGithub = () => {
  prompt({
    //list because need employee to select their position
    type: 'input',
    name: 'gitHubUser',
    message: 'Github Username:'
  })
}

//requests intern's school name
let getSchool = () => {
  prompt({
    //list because need employee to select their position
    type: 'input',
    name: 'school',
    message: 'Name of School:'
  })
}

//takes in input from the employee
let getRole = () => {
  prompt({
    //list because need employee to select their position
    type: 'list',
    name: 'position',
    message: 'Title:',
    choices: ['Manager', 'Engineer', 'Employee', 'Intern']
  })
    .then(({ position }) => {
      switch (position) {
        case 'Manager':
          getOfficeNumber()
          break
        case 'Engineer':
          getGithub()
          break
        case 'Employee':
          break
        case 'Intern':
          getSchool()
          break
      }
    })
    .catch(err => console.log(err))
}

getRole()
