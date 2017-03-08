var express = require("express");
var routes = express.Router();
var Applications = require("../models/models.js");

routes.get("/", function(req,res) {

    var query = {};
    if (req.query.applieDate) query.applieDate = req.query.applieDate;
    if (req.query.companyName) query.companyName = req.query.companyName;
    if (req.query.contactName) query.contactName = req.query.contactName;
    if (req.query.position) query.position = req.query.position;
    if (req.query.statedPay) query.statedPay = req.query.statedPay;
    if (req.query.website) query.website = req.query.website;
    if (req.query.notes) query.notes = req.query.notes;
    if (req.query.applicationUsed) query.applicationUsed = req.query.applicationUsed;
    if (req.query.isArchived) query.isArchived = req.query.isArchived;
    if (req.query.contactEmail) query.contactEmail = req.query.contactEmail;
    if (req.query.contactPhone) query.contactPhone = req.query.contac
    if (req.query.lastFollowUp) query.lastFollowUp = req.query.lastFollowUp;
    if (req.query.followUpNote) query.followUpNote = req.query.followUpNote;

    Applications.find(query, function(err, applications){
        if (err) return res.status(500).send(err);
        res.send(applications)
    })

});

routes.get("/:id", function (req, res) {
    Applications.findById(req.params.id, function(err, issue) {
        if (err) return res.status(500).send(err)
        res.send(issue)
    });
});

routes.post("/", function (req, res) {
    var application = new Applications(req.body);

    application.save(function(err) {
        if(err) return res.status(500).send(err);
        res.status(201).send(application);
    });
});

routes.put("/:id", function (req, res) {

    Applications.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, updatedApplication) {
        if (err) return res.status(500).send(err);
        res.send(updatedApplication);
    });
});

routes.delete("/:id", function (req, res) {
    Applications.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return res.status(500).send(err);
        res.send({message: "successfully deleted issue", success: true});
    });

});

module.exports = routes