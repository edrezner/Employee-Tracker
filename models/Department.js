class Department {
  constructor(name) {
    this.name = name;
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
