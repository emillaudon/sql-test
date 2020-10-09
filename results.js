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

  var sql = "INSERT INTO customers (name, email) VALUES ('ss', '221')";

  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log(res);
  });


});
