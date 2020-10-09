var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");

  var sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
  con.query(sql, function(err, res) {
    if (err) throw err;
    console.log('Table Altered')
  });

  /*
  var sql = "CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))";
  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Table created");
  });
  */

  //con.query("CREATE DATABASE nodedb", function (err, res) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
});
