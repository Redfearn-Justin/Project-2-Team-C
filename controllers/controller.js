// Require burger.js file
var routes = require('../models/routes.js');


// Require express and build our router instance
var express = require("express");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    routes.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})


router.post("/api/burgers", function (req, res) {

    routes.create([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.json({ id: result.insertId })
        });
});


router.put("/api/burgers/eat/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    var objColVals = {
        devoured: 1,
        pooped: 0
    };
    

    routes.update(objColVals, condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


router.put("/api/burgers/poop/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    var objColVals = {
        devoured: 0,
        pooped: 1
    };

    routes.update(objColVals, condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export our router
module.exports = router;
