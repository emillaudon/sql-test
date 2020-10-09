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

  var name_search = "t%";
  var id_search = 3;

  //var sql = "SELECT name FROM customers WHERE id = 1";
  //var sql = "SELECT name FROM customers WHERE id < 4";
  //var sql = "SELECT name FROM customers WHERE name LIKE 'k%' OR id = 1";
  var sql = "SELECT name FROM customers WHERE name LIKE ? AND id = ?";

  con.query(sql, [name_search, id_search], function (err, res, fields) {
    if (err) throw err;
    console.log(res);
  });
});
