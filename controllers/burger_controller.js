var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});
router.post("/api/add", function (req, res) {
    let name = req.body.name;
    burger.insert(name, function (data) {
        res.json(data);
    });
});
router.put("/api/devour/:id", function(req, res) {
    let id = req.params.id;
    console.log("id: ", id);
    burger.update(id, function (data) {
        res.json(data);
    })
})

// Export routes for server.js to use.
module.exports = router;