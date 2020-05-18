//build class called employee
class Employee {
  constructor (name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
    this.role = role

    //build getId() from employee.test.js
    this.getName = () => {

    }  

    //build getId() from employee.test.js
    this.getId = () => {

    }

    //build getEmail() from employee.test.js
    this.getEmail = () => {

    }

    //build getRole() from employee.test.js
    this.getRole = () => {
      return 'Employee'
    }
  }
}

//test of class constructor Employee
//let employee1 = new Employee ('kina','45er','mail@mail.com', 'tester')
//console.log(employee1)

//set module.exports 
module.exports = Employee