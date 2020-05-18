//node pkg: file save system
const { writeFile, appendFile } = require('fs')
//node pkg: bring in prompt via 'inquirer'
const { prompt } = require('inquirer')
//node pkg: helps with synchronicity 
const { promisify } = require('util')
// promises
const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)



//bring in other files
const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

//creating an empty string for prompt input to be pushed to
let answers = ''

const top = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <title>Manager</title>
</head>
<body>
`
const employee = data =>{
  return `
  <div class="row" style="display: flexbox; width: auto; height: 100px; background-color: #DC3711; margin-bottom: 30px; place-content: center;">
      <p style="color: #F5F5F5; font-weight: bolder; font-size: 25px;">My Team</p>
  </div>
  <div class="container">
      <div class="row">
        <div class="column">
          <div class="card" style="width: 18rem; box-shadow: 2.5px 5px #A0A0A0;">
            <div class="card-header" style="background-color: #4C6D61; color: #F8F8F8	; font-weight: bold;">
              <div class="row" style="padding-left: 15px;">
              Featured
              </div>
              <div class="row">
                <div class="col-2">
                  <svg class="bi bi-tools" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z"
                      clip-rule="evenodd" />
                    <path fill-rule="evenodd"
                      d="M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="col-8">
                  job title
                </div>
              </div>
            </div>
            <div class="container" style="background-color: #F8F8F8;">
              <ul class="list-group list-group-flush" style="margin: 10px;">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <!-- closing div for column -->
        </div>
        <!-- closing div for row  -->
      </div> 
  <!-- closing <div> for container -->
  </div>
  `
}

//takes in input from the employee
const employee = () => {
  prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Name:'
    },
    {
      type: 'list',
      name: 'position',
      message: 'Title:',
      choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'Employee ID:'
    }
  ])
}

//switchcase?
//create a function that if manager is chosen it asks for their number
//create a function that depending on job choice the graphic changes