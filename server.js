var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require ("body-parser");
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());

app.use("/applications", require("./routes/routes"));

mongoose.connect("mongodb://localhost/applications", function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database!")
});

app.listen(port, function(req, res) {
    console.log("This app is listening on " + port)
});