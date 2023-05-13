class Role {
  constructor(name, salary, departmentId) {
    this.name = name;
    this.salary = salary;
    this.departmentId = departmentId;
  }

  save() {
    const query =
      "INSERT INTO roles (name, salary, department_id) VALUES (?, ?, ?)";
    db.connection.query(
      query,
      [this.name, this.salary, this.departmentId],
      (err, result) => {
        if (err) throw err;
        console.log(`Role ${this.name} saved to the database.`);
      }
    );
  }
}

module.exports = Role;
