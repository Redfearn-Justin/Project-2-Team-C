// Require models.js file
var models = require('../models/models.js');

// Require express and build our router instance
var express = require("express");
var router = express.Router();

// Establish a variable that will act as a temporary login token
var idHolder;


// HTML ROUTES *************************************************

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/newgame", function (req, res) {
    res.render("new_char");
});

router.get("/leaderboard", function (req, res) {
    res.render("lb");
});

router.get("/play/credits", function (req, res) {
    res.render("credits");
});

router.get("/howtoplay", function (req, res) {
    res.render("how_to_play");
});


// API ROUTE: LEADERBOARD TOP 10
router.get("/api/topStats/:stat", function (req, res) {

    console.log("accessing API route...");

    //kinda broken
    var stat = req.param.stat;

    console.log( "this is the stat: " + stat);


    models.selectTen();
});



// ROUTE: CREATE CAPTAIN -> FIRST PAGE
router.get("/play", function (req, res) {
    var id = idHolder;

    // IF NO ID, (as in typed into the url manually) SEND BACK TO HOME
    if (id) {
        models.selectOne(id, function (result) {
            console.log(result);
            res.render("play", { items: result[0] });
        })
    } else {
        res.redirect('/');
    }
});

// PLAY SEQUENCE ROUTE (api route acting as an html route)
router.post("/play/changepage", function (req, res) {
    console.log(req.body);
    var id = req.body.id;
    var chap = req.body.chap;
    var page = req.body.page;
    var newCrew = req.body.crew;
    var newScrap = req.body.scrap;
    var newProf = req.body.prof;

    var newStats = {
        newCrew: newCrew,
        newScrap: newScrap,
        newProf: newProf
    };

    models.selectOne(id, function (result) {
        console.log(result);
        console.log("play_" + chap + "_" + page);
        res.render("play_" + chap + "_" + page, { layout: false, items: result[0], newStats: newStats });
    });
});


// API ROUTES ******************************************************

// NEW CHARACTER ROUTE
router.post("/api/newchar", function (req, res) {
    models.create([
        'captain_name',
        'ship_name'
    ], [
            req.body.captain_name,
            req.body.ship_name
        ], function (result) {
            var resid = result.insertId;
            idHolder = resid;
            res.json({ id: resid });
        });
});

// CHANGE STATS ROUTE
router.put("/api/changestats", function (req, res) {
    var scrap = req.body.scrap;
    var crew = req.body.crew;
    var prof = req.body.prof;
    var id = req.body.id;

    models.update(
        [
            'scrap_amount',
            'crew_hp',
            'proficiency_points'
        ],
        [
            scrap,
            crew,
            prof
        ],
        `captain_id = ${id}`
        ,
        function (result) {

            console.log("End of controller call");
            res.send(result);
        });
});

// LEADERBOARD TOP 10 ROUTE
router.get("/api/topstats", function (req, res) {
    //kinda broken
    var stat = req.body.
    models.selectTen()
    res.render("how_to_play");
});


// EXPORT OUR ROUTER
module.exports = router;
