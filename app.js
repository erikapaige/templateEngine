//node pkg: file save system
const { writeFile, appendFile, readFile } = require('fs')
//npm package 'inquirer'
const { prompt } = require('inquirer')
const { promisify } = require('util')
//npm package html-render
// const htmlRender = require('html-render')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)
const readFileSync = promisify(readFile)


//bring in class constructors from 'lib' file
const Employee = require('./Develop/lib/Employee.js')
const Engineer = require('./Develop/lib/Engineer.js')
const Intern = require('./Develop/lib/Intern.js')
const Manager = require('./Develop/lib/Manager.js')

//array logs responses form employees
let employee = []

// prompt the user  build an engineering team 
console.log('This is a template to generate information about your team. Use it to create your engineering team.')

//generate boiler plate of team.html
writeFileSync('./output/team.html', `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>MY TEAM</title>
    </head>
    <body>
      <div class="row"
      style="display: flexbox; width: auto; height: 100px; background-color: #2A355C; margin-bottom: 30px; place-content: center;">
      <p style="color: #F5F5F5; font-weight: bolder; font-size: 25px;">My Team</p>
      </div>
      <div class="container"> 
        <div class="row">
  `, err=> {
    if (err) { console.log(err)}
    }
)

// questions to ask about roles in company
//manager questions
let managerQuestions = () => {
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
      //creating new manager based on information from prompt
      let newManager = new Manager(name, id, email, officeNumber)
      //console log test to make sure data is being stored as object
      // console.log(manager)
      employee.push(newManager)
      createManager(newManager)
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
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])
    .then(({ position }) => {
      //check to make sure data working
      // console.log(position)
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
          bottomHTML()
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
    .then(({ name, id, email, github }) => {
      let newEngineer = new Engineer(name, id, email, github)
      employee.push(newEngineer)
      createEngineer(newEngineer)
    })
    .catch(err => console.log(err))
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
      let newIntern = new Intern(name, email, id, school)
      employee.push(newIntern)
      createIntern(newIntern)
    })
    .catch(err => console.log(err))
}

//option to add another employee
let addAnotherEmployee = () => {
  prompt([
    {
      type: 'list',
      name: 'add',
      message: 'Would you like to add another employee?',
      choices: ['Yes', 'No']
    }
  ])
    .then(({ add }) => {
      switch(add){
        case 'Yes':
          newEmployee()
          break
        case 'No':
          bottomHTML()
          break
      }
    })
    .catch (err => console.log(err))
}

//renders a new card based on manager's responses
let createManager = (responses) => {
  appendFileSync('./output/team.html', `
    <div class="column">
          <div class="card" style="width: 18rem; box-shadow: 2.5px 5px #A0A0A0; margin:20px;">
            <div class="card-header" style="background-color: #4C6D61; color: #F8F8F8	; font-weight: bold;">
              <div class="row" style="padding-left: 15px;">
                ${responses.name}
              </div>
              <div class="row">
                <div class="col-2">
                  <svg class="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z"
                      clip-rule="evenodd" />
                    <path fill-rule="evenodd"
                      d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="col-8">
                  Manager
                </div>
              </div>
            </div>
            <div class="container" style="background-color: #F8F8F8;">
              <ul class="list-group list-group-flush" style="margin: 10px;">
                <li class="list-group-item">Company ID: ${responses.id}</li>
                <li class="list-group-item">Email: ${responses.email}</li>
                <li class="list-group-item">Office Phone Number: ${responses.officeNumber}</li>
              </ul>
            </div>
          </div>
        <!-- closing div for column -->
        </div>
  `, err => {
    if (err) { console.log(err) }
    } 
  )
  addAnotherEmployee()
}

//renders a new card based on engineer's responses
let createEngineer = (responses) => {
  appendFileSync('./output/team.html', `
    <div class="column">
        <div class="card" style="width: 18rem; box-shadow: 2.5px 5px #A0A0A0;margin:20px;">
          <div class="card-header" style="background-color: #6D8A6E; color: #F8F8F8	; font-weight: bold;">
            <div class="row" style="padding-left: 15px;">
              ${responses.name}
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
                Engineer
              </div>
            </div>
          </div>
          <div class="container" style="background-color: #F8F8F8;">
            <ul class="list-group list-group-flush" style="margin: 10px;">
              <li class="list-group-item">Company ID: ${responses.id}</li>
              <li class="list-group-item">Email: ${responses.email}</li>
              <li class="list-group-item">Github Username: ${responses.github}</li>
            </ul>
          </div>
        </div>
        <!-- closing div for column -->
      </div>
  `, err => {
    if (err) { console.log(err) }
  }
  )
  addAnotherEmployee()
}

//renders a new card based on intern's responses
let createIntern = (responses) => {
  appendFileSync('./output/team.html', `
    <div class="column">
        <div class="card" style="width: 18rem; box-shadow: 2.5px 5px #A0A0A0;margin:20px;">
          <div class="card-header" style="background-color: #BDD8B3; color: #F8F8F8	; font-weight: bold;">
            <div class="row" style="padding-left: 15px;">
              ${responses.name}
            </div>
            <div class="row">
              <div class="col-2">
                <svg class="bi bi-pen" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.707 13.707a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391L10.086 2.5a2 2 0 012.828 0l.586.586a2 2 0 010 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 011.414 0l.586.586a1 1 0 010 1.414L5 13l-3 1 1-3z"
                    clip-rule="evenodd" />
                  <path fill-rule="evenodd"
                    d="M9.854 2.56a.5.5 0 00-.708 0L5.854 5.855a.5.5 0 01-.708-.708L8.44 1.854a1.5 1.5 0 012.122 0l.293.292a.5.5 0 01-.707.708l-.293-.293z"
                    clip-rule="evenodd" />
                  <path d="M13.293 1.207a1 1 0 011.414 0l.03.03a1 1 0 01.03 1.383L13.5 4 12 2.5l1.293-1.293z" />
                </svg>
              </div>
              <div class="col-8">
                Intern
              </div>
            </div>
          </div>
          <div class="container" style="background-color: #F8F8F8;">
            <ul class="list-group list-group-flush" style="margin: 10px;">
              <li class="list-group-item">Company ID: ${responses.id}</li>
              <li class="list-group-item">Email: ${responses.email}</li>
              <li class="list-group-item">School Name: ${responses.school}</li>
            </ul>
          </div>
        </div>
        <!-- closing div for column -->
      </div>
  `, err => {
    if (err) { console.log(err) }
  }
  )
  addAnotherEmployee()
}

let bottomHTML = (responses) => {
    appendFileSync('./output/team.html', `
    <!-- closing div for row  -->
        </div>
        <!-- closing <div> for container -->
      </div>
    </body>
    <!-- Linked Javascript libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    </html>
    `, err => {
    if (err) { console.log(err) }
    }
  )
}

