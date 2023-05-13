class Employee {
  constructor(firstName, lastName, roleId, managerId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }

  viewAllEmployees() {
    const query = "SELECT * FROM employee";
    db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All employees:");
      console.log(results);
    });
  }

  save() {
    const query =
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    db.connection.query(
      query,
      [this.firstName, this.lastName, this.roleId, this.managerId],
      (err, result) => {
        if (err) throw err;
        console.log(
          `Employee ${this.firstName} ${this.lastName} saved to the database.`
        );
      }
    );
  }

  updateRole(newRoleId) {
    const query = "UPDATE employee SET role_id = ? WHERE employee_id = ?";
    db.connection.query(query, [newRoleId, this.employeeId], (err, result) => {
      if (err) throw err;
      console.log(
        `Employee ${this.firstName} ${this.lastName}'s role updated in the database.`
      );
    });
  }
}

module.exports = Employee;
