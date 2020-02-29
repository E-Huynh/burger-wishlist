var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(cb);
    },
    insert: function(burger_name, cb) {
        orm.insertOne(burger_name, cb);
    },
    update: function(id, cb) {
        orm.updateOne(id, cb);
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  