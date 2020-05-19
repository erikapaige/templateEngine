//bring over code from employee
const Employee = require('../lib/Employee.js')

//class constructor Intern
class Intern extends Employee {
  constructor (name, id, email, school) {
    //extend keys from employee
    super (name, id, email)
    //new value intern
    this.school = school 

    //getRole() returns Intern
    this.getRole = () => {
      return "Intern"
    }

    //get intern school
    this.getSchool = () => {
      return this.school
    }
  } 
}

//test of class constructor Intern
//let intern1 = new Intern ('ariel','098767','ariel@mail.com', 'intern', 'USC')
//console.log(intern1)

module.exports = Intern