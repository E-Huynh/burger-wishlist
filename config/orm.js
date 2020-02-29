//Requiring connection.js
var connection = require("./connection.js");

//ORM
var orm = {
    //Methods
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    insertOne: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput + "( burger_name ) VALUES ( " + burger_name + ");";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    updateOne: function(tableInput, id, cb) {
        var queryString = "UPDATE " + tableInput + " SET devour = 0 WHERE id = " + id ";";
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