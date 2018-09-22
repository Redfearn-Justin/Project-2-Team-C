// Requiring the orm object
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM
var models = {
  all: function (cb) {
    orm.selectAll("game_log", function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.insertOne("game_log", cols, vals, function (res) {
      cb(res);
    });
  },

  update: function (objColVals, condition, cb) {
    orm.updateOne("game_log", objColVals, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.deleteOne("game_log", condition, function (res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller (catsController.js)
module.exports = models;