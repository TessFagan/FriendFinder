// This file offers a set of routes for sending users to the various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/Users/TessFagan/projects/HARCAM201902FSF5/activities/15-sequelize/01-Activities/05-SequelizeLibrary/Solved/app/routes/html-routes.js"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    });

}
