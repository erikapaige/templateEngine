//build class called employee
class Employee {
  constructor (name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
    this.role = role

    //build getId() from employee.test.js
    this.getName = () => {
      // console.log(this.name)
      return this.name
    }  

    //build getId() from employee.test.js
    this.getId = () => {
      return this.id
      // console.log(this.id)
    }

    //build getEmail() from employee.test.js
    this.getEmail = () => {
      return this.email
      // console.log(this.email)
    }

    //build getRole() from employee.test.js
    this.getRole = () => {
      return 'Employee'
    }
  }
}

// set module.exports 
module.exports = Employee

//test of class constructor Employee
//let employee1 = new Employee ('kina','45er','mail@mail.com')
//console.log(employee1)

//testing functions above
// employee1.getName()
// employee1.getId()
// employee1.getEmail()
// employee1.getRole()