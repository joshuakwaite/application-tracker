var express = require("express");
var routes = express.Router();
var Applications = require("../models/models.js");

routes.get("/", function(req,res) {

    Applications.find({user: req.user._id}, function(err, applications){
        if (err) return res.status(500).send(err);
        res.send(applications)
    })

});

routes.get("/:id", function (req, res) {
    Applications.find({_id: req.params.id, user: req.user._id}, function(err, application) {
        if (err) return res.status(500).send(err);
        res.send(application)
    });
});

routes.post("/", function (req, res) {
    var application = new Applications(req.body);

    application.user = req.user;
    application.save(function(err, newApplication) {
        if(err) return res.status(500).send(err);
        res.status(201).send(newApplication);
    });
});

routes.put("/:id", function (req, res) {

    Applications.findOneAndUpdate({_id: req.params.id, user: req.user._id}, function (err, application) {
        if (err) return res.status(500).send(err);
        res.send(application);
    });
});

routes.delete("/:id", function (req, res) {
    Applications.findOneAndRemove({_id: req.params.id, user: req.user._id}, function (err, result) {
        if (err) return res.status(500).send(err);
        res.send({message: "successfully deleted issue", success: true,});
    });

});

module.exports = routes