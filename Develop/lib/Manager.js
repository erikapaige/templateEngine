//bring over code from employee
const Employee = require('../lib/Employee.js')

//class constructor for Manager
class Manager extends Employee {
  constructor (name, id, email, role, officeNumber) {
    //extend keys from employee
    super (name, id, email, role)
    //new key for manager
    this.officeNumber = officeNumber

    //getRole() returns Manager
    this.getRole = () => {
      return 'Manager'
    }
    
    //get GitHub profile
    this.getOfficeNumber = () => {
      return this.officeNumber
    }
    
  }
}  

  //set role to true, so can only select manager
  //test phone number

//test of class constructor Employee
//let manager1 = new Manager ('Man','99999','manager@mail.com', 'manager')
//console.log(manager1)

module.exports = Manager