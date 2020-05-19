//node pkg: file save system
const { writeFile, appendFile } = require('fs')
//npm package 'inquirer
const { prompt } = require('inquirer')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

//bring in constructors
// const Employee = require('../lib/Employee.js')
// const Engineer = require('../lib/Engineer.js')
// const Intern = require('../lib/Intern.js')
// const Manager = require('../lib/Manager.js')

//requests manager's office number
// let getOfficeNumber = () =>{
//   prompt({
//     //list because need employee to select their position
//     type: 'number',
//     name: 'officeNum',
//     message: 'Office Number:'
//   })
// }
// // requests engineer's github username
// let getGithub = () => {
//   prompt({
//     //list because need employee to select their position
//     type: 'input',
//     name: 'gitHubUser',
//     message: 'Github Username:'
//   })
// }

// //requests intern's school name
// let getSchool = () => {
//   prompt({
//     //list because need employee to select their position
//     type: 'input',
//     name: 'school',
//     message: 'Name of School:'
//   })
// }

// //takes in input from the employee
// let getRole = () => {
//   prompt({
//     //list because need employee to select their position
//     type: 'list',
//     name: 'position',
//     message: 'Title:',
//     choices: ['Manager', 'Engineer', 'Employee', 'Intern']
//   })
//     .then(({ position }) => {
//       switch (position) {
//         case 'Manager':
//           getOfficeNumber()
//           break
//         case 'Engineer':
//           getGithub()
//           break
//         case 'Employee':
//           break
//         case 'Intern':
//           getSchool()
//           break
//       }
//     })
//     .catch(err => console.log(err))
// }


//takes in input from the employee
// const employee = () => [{
//   // prompt([
//     // {
//       type: 'input',
//       name: 'employeeName',
//       message: 'Name:'
//     },
//     {
//       type: 'list',
//       name: 'position',
//       message: 'employeeTitle:',
//       choices: ['Manager', 'Engineer', 'Employee', 'Intern']
//     },
//     {
//       type: 'input',
//       name: 'employeeID',
//       message: 'Employee ID:'
//     },
//     {
//       type: 'input',
//       name: 'employeeEmail',
//       message: 'Employee ID:'
//     }]
  // ])
// }

let nameQuestion = {
  type: 'input',
  name: 'employeeName',
  message: 'Name:'
}

let roleQuestion = {
  type:'choices',
  name:'employeeRole'
  message: 'Role:'
  choices: ['Manager', 'Engineer', 'Employee', 'Intern']
}

let emailQuestion = {
  type:'input',
  name:'employeeEmail',
  message: 'Email:'
}

let idQuestion = {
  type: 'input',
  name: 'employeeID',
  message: 'ID:'
}

let phoneQuestion = {
  type: 'number',
  name: 'employeePhone',
  message: 'Office Phone Number:'
}

let githubQuestion = {
  type: 'input',
  name: 'employeeGithub',
  message: 'Github Username:'
}

let schoolQuestion = {
  type:'input',
  name: 'employeeSchool',
  message: 'Name of your school:'
}

prompt([nameQuestion, roleQuestion, emailQuestion, idQuestion])
.then

//switchcase the questions?
//  .then(({ position }) => {
//    switch (position) {
//      case 'Manager':
//        getOfficeNumber()
//        break
//      case 'Engineer':
//        getGithub()
//        break
//      case 'Employee':
//        break
//      case 'Intern':
//        getSchool()
//        break
//    }
//  })
//     .catch(err => console.log(err))
// }
//prompt for name, if true enter data, if false alert 'must enter name'
//prompt for position, if manager ask for office number, else engineer github, intern school, else employee,nothing
//create a function that if manager is chosen it asks for their number
//create a function that depending on job choice the graphic changes