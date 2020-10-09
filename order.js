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

  //var sql = "SELECT * FROM customers ORDER BY name";
  //var sql = "SELECT * FROM customers ORDER BY name DESC";
  var sql = "SELECT * FROM customers ORDER BY id DESC";

  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
  });
});
