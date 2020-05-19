//node pkg: file save system
const { writeFile, appendFile, readFile } = require('fs')
//npm package 'inquirer'
const { prompt } = require('inquirer')
const { promisify } = require('util')
//npm package html-render
// const htmlRender = require('html-render')

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
      name: 'name',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office Phone Number:'
    }
  ])
    .then(({ name, id, email, officeNumber }) => {
      let engineer = new Engineer(name, id, email, officeNumber)
      employee.push(manager)
    })
    .catch(err => console.log(err))
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
          // htmlRender(employee)
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
      name: 'name',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Github Username:'
    }
  ])
    .then(({ name, id, email, github }) =>{
    let engineer = new Engineer(name, id, email, github)
    employee.push(engineer)
    })
    .catch (err => console.log(err))
}

//intern question
let internQuestions = () => {
  prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Name of School:'
    }
  ])
    .then(({ name, email, id, school }) => {
    let intern = new Intern(name, email, id, school)
    employee.push(intern)
    })
    .catch(err => console.log(err))
}

// function newEmployee()
  //have option to exit