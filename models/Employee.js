const cTable = require("console.table");

class Employee {
  constructor(db) {
    this.db = db;
  }

  viewAllEmployees(callback) {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,
                  CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                  FROM employee
                  INNER JOIN role ON employee.role_id = role.id
                  INNER JOIN department ON role.department_id = department.id
                  LEFT JOIN employee AS manager ON employee.manager_id = manager.id
                  ORDER By employee.id ASC`;
    this.db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All employees:");
      console.table(results);
      callback(this.db);
      return results;
    });
  }

  save(firstName, lastName, roleId, managerId, callback) {
    const query =
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    this.db.connection.query(
      query,
      [firstName, lastName, roleId, managerId],
      (err, result) => {
        if (err) throw err;
        console.log(`Employee ${firstName} ${lastName} saved to the database.`);
        callback(this.db);
      }
    );
  }

  updateRole(employeeId, newRoleId, callback) {
    const query = "UPDATE employee SET role_id = ? WHERE id = ?";
    this.db.connection.query(query, [newRoleId, employeeId], (err, result) => {
      if (err) throw err;
      console.log(`Employee's role updated in the database.`);
      callback(this.db);
    });
  }
}

module.exports = Employee;
