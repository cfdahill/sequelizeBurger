# burger

server.js:
-This uses node to create a server while on local host.
    Use command line to enter the parent folder of server.js and type:
        node server
    to run it.  If everything is working fine then you will get a console.log of the port in use.
-Also establishes the use of routes (actual routes created in burgers_controller.js), the use of handlebars, and the use of static elements such as CSS.
-Requires burgers_controller.js

FOLDER: config
connection.js:
-Establishes a connection with the mysql database.
-A password is required, by default it will look for a .env file that is set up the following way:
    # MySQL password

    MYSQL_PW=[password]

orm.js:
-Establishes 3 orms to be used to use the mysql database.
    1.  Select all so the entire database can be shown/used
    2.  Update so a single row can be updated
    3.  Add row so new data can be added to the datatable
-Set up so that the specific table needs to be called each time.  This makes it so it can be used with other tables outside of this assignment.
-Requires connection.js

FOLDER: controllers
burgers_controller.js:
-Creates three routes for the program:
    1. "/" is a get route that will get all of the burgers' data from the database to be used to display all of them.
    2.  "/api/burgers" is a post route that lets the user add a burger to the display and database.
    3.  "/api/burgers/:id" is a put route that lets the user change devoured boolean to true.
-Requires burgers.js
-Renders data into handlebars

FOLDER: db
schema.sql:
-This creates the database being used and the table being used.
-The table has ID auto-incrementing and unique, it also has a devoured column with a boolean default to false

seeds.sql:
-This creates some initial data to go in the table.

FOLDER: models
burger.js:
-Takes the generic orms created in orm.js and makes them specific to the burgers app.  It does not have everything plugged in because it needs to take in user input.
-Requires orm.js

FOLDER: public
test.html:
subFOLDER: assets
    subFOLDER: css 
    burger_style.css:
    - provides styling for the handlebars created html page
    subFOLDER: js
    buttons.js:
    -Makes all buttons interactive.  Devoured button does an ajax.put to change the devoured boolean to true which will then move the burger to the unavailable part of the html page.  The submit button uses ajax.post to add a burger to the database which will then show in the html page.

FOLDER: views
index.handlebars:
-Creates the main handlebar file that will take in all the database info and make it displayable in the html body
subFOLDER: layouts:
    main.handlebars:
    -Creates the html head and takes in index.handlebars for the body

.gitignore:
-Because sometimes you don't want stuff posted to git.

package.json:
-Provides information about the npms used in the app.  To install same npms, go to the control panel and in the repository type "npm install" to install all needed npms.  The npms used are:
    express
    mysql
    express-handlebars
    body-parser
