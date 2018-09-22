// Requiring the orm object
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using space-y specific input for the ORM
var routes = {

    //Select method
    select: function(cb) {

      orm.selectAll("game_Log", function(res) {

        cb(res);
      });
    },

    //Insert (aka 'create') method; The variables cols and vals are arrays.
    insert: function(cols, vals, cb) {

      orm.insertOne("game_Log", cols, vals, function(res) {

        cb(res);
      });
    },
    //Update method
    update: function(objColVals, condition, cb) {

      orm.updateOne("game_Log", objColVals, condition, function(res) {
        
        cb(res);
      });
    }
  };


// Export the database functions for the controller (catsController.js)
module.exports = routes;