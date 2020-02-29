var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
router.post("/api/add", function(req, res) {
    let name = req.body.name;
    console.log(`Burger name is ${name}`);
    burger.insert(name, function(data) {
        res.json(data);
    });
  });

// Export routes for server.js to use.
module.exports = router;