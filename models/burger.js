console.log("keep up coding");

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    }
}

//

// module.exports = burger;
