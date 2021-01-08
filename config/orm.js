var connection = require("../config/connection.js");



var orm = {

    selectAll: function (columnName, alias, table) {
        var queryString = "SELECT ?? AS ? FROM ??";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },


// insertOne()
// updateOne()


}




module.exports = orm;