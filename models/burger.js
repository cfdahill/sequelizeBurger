//import ORM into here
//create code that will use the various ORMs with specific inputs
//export file

var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (value, cb) {
        orm.insertOne("burgers", "burger_name", value, function (res) {
            cb(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers", "devoured", true, "id", id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;