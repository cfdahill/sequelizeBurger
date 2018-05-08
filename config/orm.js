//import connection.js into here
//create orms that will do what is needed with the database
//  will need: selectAll(), insertOne(), and updateOne()

//will need to display all burgers
    //can break this into two parts: display all devoured & display all non-devoured
    //or can make a forloop later that if (devoured) display left, else display right (probably the easier/best way to go about it)
//add burger to the list
//update the devoured boolean

//even though I could have simplified the below orm for the assignment, by knowing that the table and columns will not change, I created the orm to be able to work with any table and column name by requiring them to be declared.  This will let me use parts of the orm in other assignments if needed by copying and pasting.

var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, data){
            if (err) {
                console.log("orm.js, selectAll error: " + err);
            }
            cb(data);
        });
    },
    insertOne: function(table, column, value, cb) {
        //this is for a database with one column of user input
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [table, column, value], function(err, data){
            if (err) {
                console.log("orm.js, insertOne error: " + err);
            }
            cb(data);
        });
    },
    updateOne: function(table, changeColumn, newValue, idColumn, id, cb) {
        //this is for a database in which only one column will be changed
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table, changeColumn, newValue, idColumn, id], function(err, data){
            if (err) {
                console.log("orm.js, updateOne error: " + err);
            }
            cb(data);
        });
    }
};

module.exports = orm;