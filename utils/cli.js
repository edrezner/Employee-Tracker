const inquirer = require("inquirer");
const Database = require("../models/Database");
const Department = require("../models/Department");
const Employee = require("../models/Employee");
const Role = require("../models/Role");

function start(db) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((data) => {
      const selection = data.selection;

      if (selection === "View all departments") {
        const department = new Department(db);
        department.viewAllDepartments(start);
      } else if (selection === "View all roles") {
        const role = new Role(db);
        role.viewAllRoles(start);
      } else if (selection === "View all employees") {
        const employee = new Employee(db);
        employee.viewAllEmployees(start);
      } else if (selection === "Add a department") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "departmentName",
              message: "Enter the name of the department:",
            },
          ])
          .then((data) => {
            const departmentName = data.departmentName;
            const department = new Department(db);
            department.save(departmentName, start);
          });
      } else if (selection === "Add a role") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "role",
              message: "Enter the name of the role:",
            },
            {
              type: "input",
              name: "salary",
              message: "Enter the salary amount for the role:",
            },
            {
              type: "input",
              name: "departmentName",
              message:
                "Enter the name of the department the role is a part of:",
            },
          ])
          .then((data) => {
            const roleName = data.role;
            const salary = data.salary;
            const departmentName = data.departmentName;
            const role = new Role(roleName, salary, departmentName, db);
            role.save(role, start);
          });
      } else if (selection === "Add an employee") {
      } else if (selection === "Update an employee role") {
        // User selects update employee role; shown list of employee names (first + last); show all possible titles from role table;
        // UDATE employee table's role id to the new role id (that's from the chosen role title: SELECT * FROM role WHERE title = inquirer role title).
        // WHERE id = inquirerselected employee id. SELECT * FROM employee WHERE first_name = split at first_name AND last_name = splitted at last_name
      }
    });
}

module.exports = {
  start,
};
