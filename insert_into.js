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

  var sql =
    "INSERT INTO customers (name, email) VALUES ('John2', 'kejak@jkfda.sa')";
  con.query(sql, function (err, res) {
    if (err) throw err;
    console.log("Table inserted");
  });


});
