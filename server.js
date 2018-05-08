var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));
//This will let me use CSS files & others without the server thinking I'm wanting to upload a new page

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//above 3 lines are making handlebars usable

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Order ready for http:localhost:" + PORT);
})