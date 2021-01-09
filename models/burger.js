var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insertOne: function (column, burgerName, cb) {
        orm.insertOne("burgers", column, burgerName, function (res) {
            cb(res)
        })
    },
    updateOne: function (table, devoured, boolean, column, burgerName, cb) {
        orm.updateOne("burgers", "devoured", "1", "burger_name", "hamburger", function (res) {
            cb(res)
        })

    }
}





module.exports = burger