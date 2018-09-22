//FUNCTION FOR FINAL PAGE BUTTONS 

// ===================================

//function for buttons pressed on the Leaderboard page

function leaderboardDisplay() {

    connection.connect(function(err) {

        if(err) throw err;
    
        //buttonPressed should be dynamic to the button's "data attribute"
        //change below to reflect dynamic button input
    
        var buttonPressed = "scrap amount";
    
        var sqlQuery = "SELECT captain_name, ship_name, scrap_amount, crew_hp, proficiency_points FROM game_Log ORDER BY " + buttonPressed + " DESC LIMIT 5"
    
        connection.query(sqlQuery, function(err, results) {
    
            if(err) throw err;

            // pushing results to page
            //make placeholder for display div

            for (var i = 0; i < results.length; i++) {
                $("#displayDiv").text() 

            }


    
    
    
    
        });
    });

}

//function for buttons clicked in the scenerio

//should be "updating" the various stats, per user's "id"

function scenerioButton () {
}

// SELECT captain_name, ship_name, scrap_amount, crew_hp, proficiency_points FROM game_Log ORDER BY scrap_amount* DESC;

    // could make this a variable per the button being clicked
//

module.exports = {
    leaderboardDisplay: leaderboardDisplay,
    scenerioButton: scenerioButton    
}