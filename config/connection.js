//connect node to mysql and export this
require("dotenv").config();
 

var mysql = require("mysql")
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PW,
    database: "burgers_db"
});
}
connection.connect(function(err) {
    if (err) {
        console.log("error connecting to mysql: " + err.stack);
        return;
    }
    console.log("connected to mysql as " + connection.threadId);
});

module.exports = connection;