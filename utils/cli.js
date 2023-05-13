const inquirer = require("inquirer");
const Database = require("../models/Database");
const Department = require("../models/Department");
const Employee = require("../models/Employee");
const Role = require("../models/Role");

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
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
    .then((answers) => {
      const action = answers.action;

      if (action === "View all departments") {
        // Call Department class method to view all departments
      } else if (action === "View all roles") {
        // Call Role class method to view all roles
      } else if (action === "View all employees") {
        // Call Employee class method to view all employees
      } else if (action === "Add a department") {
        // Prompt user for department information using inquirer
        // Call Department class method to add department to database
      } else if (action === "Add a role") {
        // Prompt user for role information using inquirer
        // Call Role class method to add role to database
      } else if (action === "Add an employee") {
        // Prompt user for employee information using inquirer
        // Call Employee class method to add employee to database
      } else if (action === "Update an employee role") {
        //
      }
    });
}

module.exports = {
  start,
};
