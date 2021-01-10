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
    updateOne: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res)
        })

    }
}





module.exports = burger