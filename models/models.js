// Requiring the orm object
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using specific input for the ORM

//changes made
//=====================================
var models = {
  selectTen: function (stat, cb) {
    orm.selectTen("game_log", stat, function (res) {
      cb(res);
    });
  },
  //=============================

  selectOne: function (id, cb) {
    orm.selectOne("game_log", id, function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.insertOne("game_log", cols, vals, function (res) {
      cb(res);
    });
  },

  update: function (arrayColNames, arrayValues, condition, cb) {
    orm.updateOne("game_log", arrayColNames, arrayValues, condition, function (res) {
      cb(res);
    });
  },

  // ================================
  // NEEDS JUSTIN'S SQL FUNCTIONALITY
  lbSearch: function (objColVals, condition, cb) {
    orm.lbSearch("game_log", objColVals, condition, function (res) {
      cb(res);
    });
  },

};


// Export the database functions for the controller (catsController.js)
module.exports = models;