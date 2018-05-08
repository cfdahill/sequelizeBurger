//import express and burger.js
//create routers for app

var express = require("express");
var routes = express.Router();

var burger = require("../models/burger.js");

routes.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
          };
        res.render("index", hbsObject);
    });
});

routes.post("/api/burgers", function (req, res) {
    console.log("req.body.text: " + req.body.burger_name);
    burger.insertOne(req.body.burger_name, function (results) {
        res.json();
    });
});

routes.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = routes