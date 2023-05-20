const cTable = require("console.table");

class Role {
  constructor(db) {
    this.db = db;
  }

  viewAllRoles(callback) {
    const query = `SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      JOIN department ON role.department_id = department.id
      ORDER BY role.id ASC`;
    this.db.connection.query(query, (err, results) => {
      if (err) throw err;
      console.log("All roles:");
      console.table(results);
      callback(this.db);
      return results;
    });
  }

  save(title, salary, departmentId, callback) {
    const query =
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
    this.db.connection.query(
      query,
      [title, salary, departmentId],
      (err, result) => {
        if (err) throw err;
        console.log(`Role ${title} saved to the database.`);
        callback(this.db);
      }
    );
  }
}

module.exports = Role;
