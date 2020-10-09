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

  var sql = "SELECT * FROM customers ORDER BY id DESC LIMIT 3";

  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
});
