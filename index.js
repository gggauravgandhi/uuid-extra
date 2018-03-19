var uuidV1 = require("uuid/v1")
var uuidV4 = require("uuid/v4")

module.exports = {
  v1: uuidV1,
  v4: uuidV4,
  ex14: function ex14() {
    var v1 = uuidV1().split('');
    var v4 = uuidV4().split('');
    var e14 = [];
    var v1Length = v1.length;


    for (var i = 0; i < v1Length; i++) {
      e14.push(Math.round(Math.random()) ? v1[i] : v4[i]);
    }

    return e14.join('');
  }
};