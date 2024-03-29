// This file offers a set of routes for sending users to the various html pages

// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function (req, res) {
        console.log("something is happening")
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}
