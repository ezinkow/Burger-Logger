var connection = require("../config/connection.js");



var orm = {

    selectAll: function (table, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, column, burgerName, cb){
        var query = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(query, [table, column, burgerName], function (err, result){
            if (err) throw err;
            cb(result)
        })
    },

    updateOne: function(table, column, devoured, id, idNumber, cb){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(query, [table, column, devoured, id, idNumber], function (err, result){
            if (err) throw err;
            cb(result)
        })
    }


}




module.exports = orm;