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
        connection.query(query, [table, column.toString(), burgerName], function (err, result){
            if (err) throw err;
            cb(result)
        })
    },

    updateOne: function(id, cb){
        var query = "UPDATE burgers SET devoured = 1 WHERE id = ?"
        connection.query(query, [id], function (err, result){
            if (err) throw err;
            cb(result)
        })
    }


}




module.exports = orm;