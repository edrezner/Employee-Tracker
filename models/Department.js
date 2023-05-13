class Department {
  constructor(name) {
    this.name = name;
  }

  viewAllDepartments() {
    const query = "SELECT * FROM department";
    db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All departments:");
      console.log(results);
    });
  }

  save() {
    const query = "INSERT INTO departments (name) VALUES (?)";
    db.connection.query(query, [this.name], (err, result) => {
      if (err) throw err;
      console.log(`Department ${this.name} saved to the database.`);
    });
  }
}

module.exports = Department;
