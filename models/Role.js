const cTable = require("console.table");

class Role {
  constructor(db) {
    this.db = db;
  }

  async viewAllRoles(callback) {
    const query = "SELECT * FROM role";
    db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All roles:");
      console.table(results);
      callback(this.db);
      return results;
    });
  }

  async save() {
    const query =
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
    this.db.connection.query(
      query,
      [title, salary, departmentId],
      (err, result) => {
        if (err) throw err;
        console.log(`Role ${title} saved to the database.`);
      }
    );
  }
}

module.exports = Role;
