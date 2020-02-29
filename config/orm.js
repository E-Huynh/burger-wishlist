//Requiring connection.js
var connection = require("./connection.js");

//ORM
var orm = {
    //Methods
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers ( burger_name ) VALUES ( " + burger_name + ");";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devour = 0 WHERE id = " + id ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
}

// Export the orm object for the model (cat.js).
module.exports = orm;