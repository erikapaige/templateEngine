//bring over code from employee
const Employee = require('../lib/Employee.js')

//class constructor for Engineer
class Engineer extends Employee {
  constructor (name, id, email, github) {
    // extend keys from employee
    super (name, id, email)
    // new key for engineer
    this.github = github

    //getRole() returns Engineer
    this.getRole = () => {
      return "Engineer"
    }

    //get GitHub profile
    this.getGithub = () => {
      return this.github
    }
  }
}

// test of class constructor Employee
// let engineer1 = new Engineer ('Joe','65432','joel@mail.com', 'engineer')
// console.log(engineer1)

//export file
module.exports = Engineer
