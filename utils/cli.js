const inquirer = require("inquirer");
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
        const departmentQuery = "SELECT * FROM department";
        db.connection.query(departmentQuery, (err, departments) => {
          if (err) throw err;

          inquirer
            .prompt([
              {
                type: "input",
                name: "title",
                message: "Enter the job title:",
              },
              {
                type: "input",
                name: "salary",
                message: "Enter the salary amount for the role:",
              },
              {
                type: "list",
                name: "departmentId",
                message: "Select the department the role is a part of:",
                choices: departments.map((department) => ({
                  name: department.name,
                  value: department.id,
                })),
              },
            ])
            .then((data) => {
              const { title, salary, departmentId } = data;
              const role = new Role(db);
              role.save(title, salary, departmentId, start);
            });
        });
      } else if (selection === "Add an employee") {
        const roleQuery = "SELECT id, title FROM role";

        const managerQuery =
          "SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee";

        db.connection.query(roleQuery, (err, roles) => {
          if (err) throw err;

          db.connection.query(managerQuery, (err, managers) => {
            if (err) throw err;

            inquirer
              .prompt([
                {
                  type: "input",
                  name: "firstName",
                  message: "Enter employee's first name:",
                },
                {
                  type: "input",
                  name: "lastName",
                  message: "Enter employee's last name:",
                },
                {
                  type: "list",
                  name: "roleId",
                  message: "Select the job title of the employee:",
                  choices: roles.map((role) => ({
                    name: role.title,
                    value: role.id,
                  })),
                },
                {
                  type: "list",
                  name: "managerId",
                  message: "Select the employee's manager:",
                  choices: managers.map((manager) => ({
                    name: manager.name,
                    value: manager.id,
                  })),
                },
              ])
              .then((data) => {
                const firstName = data.firstName;
                const lastName = data.lastName;
                const roleId = data.roleId;
                const managerId = data.managerId;
                const employee = new Employee(db);
                employee.save(firstName, lastName, roleId, managerId, start);
              });
          });
        });
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
