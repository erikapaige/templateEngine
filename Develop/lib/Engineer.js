//bring over code from employee
const Employee = require('../lib/Employee.js')

//class constructor for Engineer
class Engineer extends Employee {
  constructor (name, id, email, role, github) {
    // extend keys from employee
    super (name, id, email, role)
    // new key for engineer
    this.github = github

    //set role to true, so can only select engineer
    //brin in api for github profile
  }
}

// test of class constructor Employee
// let engineer1 = new Engineer ('Joe','65432','joel@mail.com', 'engineer')
// console.log(engineer1)

//export file
module.exports = Engineer
