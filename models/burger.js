console.log("keep on coding");

var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("bur", function(res) {
            cb(res);
        });
    },

insertOne: function (cols, vals, cb) {
    orm.insertOne("bur", cols, vals, function(res) {
        cb(res);
    });
},
updateOne: function (cols, vals, cb) {
    orm.insertOne("bur", cols, vals, function(res){
        cb(res);
    });

},
delete: function(condition, cb) {
    orm.delete("bur", condition, function(res) {
      cb(res);
    });
  }
};


//

module.exports = burger;