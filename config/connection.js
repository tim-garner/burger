var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ddlkP12oa>316!",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM burgers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;