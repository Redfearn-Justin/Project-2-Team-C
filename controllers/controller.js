// Require burger.js file
var models = require('../models/models.js');


// Require express and build our router instance
var express = require("express");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("index");
})

router.get("/newgame", function (req, res) {
    res.render("new_char");
})

router.get("/leaderboard", function (req, res) {
    res.render("new_char");
})

router.get("/howtoplay", function (req, res) {
    res.render("new_char");
})

router.post("/api/newchar", function (req, res) {
    models.create([
        'captain_name',
        'ship_name'
    ], [
            req.body.captain_name,
            req.body.ship_name
        ], function (result) {
            res.json({ id: result.insertId })
        });
});


// router.put("/api/game_log/eat/:id", function (req, res) {

//     var condition = "id = " + req.params.id;

//     var objColVals = {
//         devoured: 1,
//         pooped: 0
//     };
    

//     models.update(objColVals, condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


// router.put("/api/game_log/poop/:id", function (req, res) {

//     var condition = "id = " + req.params.id;

//     var objColVals = {
//         devoured: 0,
//         pooped: 1
//     };

//     models.update(objColVals, condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


// router.delete("/api/game_log/:id", function (req, res) {

//     var condition = "id = " + req.params.id;

//     models.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


// Export our router
module.exports = router;
