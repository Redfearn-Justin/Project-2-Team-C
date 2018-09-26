// Import MySQL connection.
var connection = require("./connection.js");


// Helper function for SQL syntax - formats "?" better: ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}


// ORM Object with MySQL methods
var orm = {

    selectAll: (tableInput, stat, cb) => {
        console.log("'select Ten ORM' works");

        var queryString = "SELECT * FROM " + tableInput + " ORDER BY " + stat +" DESC LIMIT 10;";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // ORM method used to find and grab all stats from a single Captain using their ID
    selectOne: (tableInput, id, cb) => {
        console.log("'select one ORM' works");

        var queryString = `SELECT * FROM ${tableInput} WHERE captain_id = ${id};`;
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // ORM method used to find and grab all stats from a single Captain using their name (for lb search)
    captainSearch: (tableInput, name, cb) => {
        console.log("'captain search ORM' works");

        var queryString = `SELECT * FROM ${tableInput} WHERE captain_name = ${name};`;
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // ================================
    // NEEDS JUSTIN'S SQL FUNCTIONALITY
    lbSearch: (tableInput, name, cb) => {
        console.log("'lbSearch ORM' works");

        var queryString = `SELECT * FROM ${tableInput} WHERE captain_name = ${name};`;
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // ORM method used to create a new Captain (works)
    insertOne: (table, cols, vals, cb) => {
        console.log("'insert ORM' works");

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            // To see what the result object is returned
            // console.log(result);
            cb(result);
        });
    },

    // ORM method used to change the values of our Captain (works)
    updateOne: (table, arrayColNames, arrayValues, condition, cb) => {
        console.log("'update/put ORM' works");
        
        var queryString = `UPDATE ${table} SET ${arrayColNames[0]} = ${arrayColNames[0]} + ${arrayValues[0]}, ${arrayColNames[1]} = ${arrayColNames[1]} + ${arrayValues[1]}, ${arrayColNames[2]} = ${arrayColNames[2]} + ${arrayValues[2]} WHERE ${condition};`;

        // console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

// Export the orm object
module.exports = orm;