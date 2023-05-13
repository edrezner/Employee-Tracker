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
      switch (answers.action) {
        case "View all departments":
          // Call Department class method to view all departments
          break;
        case "View all roles":
          // Call Role class method to view all roles
          break;
        case "View all employees":
          // Call Employee class method to view all employees
          break;
        case "Add a department":
          // Prompt user for department information using inquirer
          // Call Department class method to add department to database
          break;
        case "Add a role":
          // Prompt user for role information using inquirer
          // Call Role class method to add role to database
          break;
        case "Add an employee":
          // Prompt user for employee information using inquirer
          // Call Employee class method to add employee to database
          break;
        case "Update an employee role":
          // Prompt user for employee and role information using inquirer
          // Call Employee class method to update employee role in database
          break;
        default:
          console.log("Invalid action");
          break;
      }
    });
}

module.exports = {
  start,
};
