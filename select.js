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

  var sql = "SELECT * FROM customers";

  con.query(sql, function (err, res, fields) {
    if (err) throw err;
    console.log(res[0].name);
  });


});
