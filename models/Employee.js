class Employee {
  constructor(firstName, lastName, roleId, managerId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }

  save() {
    const query =
      "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
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
    const query = "UPDATE employees SET role_id = ? WHERE employee_id = ?";
    db.connection.query(query, [newRoleId, this.employeeId], (err, result) => {
      if (err) throw err;
      console.log(
        `Employee ${this.firstName} ${this.lastName}'s role updated in the database.`
      );
    });
  }
}

module.exports = Employee;
