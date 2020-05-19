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

