const cTable = require("console.table");

class Department {
  constructor(db) {
    this.db = db;
  }

  viewAllDepartments(callback) {
    const query = "SELECT * FROM department";
    this.db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All departments:");
      console.table(results);
      //   this.db.connection.end();
      callback(this.db);
    });
  }

  save(name, callback) {
    // var name = departmentName; var callback = start;
    const query = "INSERT INTO department (name) VALUES (?)";
    this.db.connection.query(query, [name], (err, result) => {
      if (err) throw err;
      console.log(`Department ${name} saved to the database.`);
      callback(this.db);
    });
  }
}

module.exports = Department;
