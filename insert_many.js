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

  var sql = "INSERT INTO customers (name, email) VALUES ?";
  var values = [
    ["Tim", "@tim.ckia"],
    ["T23im", "@tim.ck3ia"],
    ["Tim32", "@tim.cki2a"],
  ];
  con.query(sql, [values], function (err, res) {
    if (err) throw err;
    console.log("Table inserted " + res.affectedRows);
  });


});
