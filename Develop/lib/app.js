const { prompt } = require('inquirer')

//takes in input from the employee
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
    choices: ['Manager', 'Engineer', 'Intern']
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'Employee ID:'
  }
])

//create a function that if manager is chosen it asks for their number
//create a function that depending on job choice the graphic changes