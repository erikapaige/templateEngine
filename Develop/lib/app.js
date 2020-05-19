//node pkg: file save system
const { writeFile, appendFile, readFile } = require('fs')
//node pkg: bring in prompt via 'inquirer'
const { prompt } = require('inquirer')
//node pkg: helps with synchronicity 
const { promisify } = require('util')
//promises
const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)


//bring in constructors
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

let getName = () => {
  prompt({
    type: 'input',
    name: 'name',
    message: 'Name:'
  })
  .then(name =>{
    console.log(name)
  })
  .catch(err => console.log(err))
}

let getId = () => {
  prompt({
    type: 'input',
    name: 'userId',
    message: 'User ID:'
  })
  .then(userId => {
    console.log(userId)
  })
  .catch(err => console.log(err))
}

let getEmail = () => {
  prompt({
    type: 'input',
    name: 'email',
    message: 'Email:'
  })
  .then(email => {
    console.log(email)
  })
  .catch(err => console.log(err))
}

let getRole = () => {
  prompt({
    //list because need employee to select their position
    type: 'list',
    name: 'position',
    message: 'Title:',
    choices: ['Manager', 'Engineer', 'Employee', 'Intern']
  })
  .then (({ position }) => {
    switch(position){
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


//takes in input from the employee
// const employee = answers => {
//   prompt ([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Name:'
//     },
//     {
//       type: 'list',
//       name: 'position',
//       message: 'Title:',
//       choices: ['Manager', 'Engineer', 'Employee', 'Intern']
//     },
//     {
//       type: 'input',
//       name: 'employeeID',
//       message: 'Employee ID:'
//     }
//   ])
// }

//switchcase?
//prompt for name, if true enter data, if false alert 'must enter name'
//prompt for position, if manager ask for office number, else engineer github, intern school, else employee,nothing
//create a function that if manager is chosen it asks for their number
//create a function that depending on job choice the graphic changes