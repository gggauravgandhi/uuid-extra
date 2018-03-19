const uuidV1 = require("uuid/v1")
const uuidV4 = require("uuid/v4")

module.exports = {
  v1: uuidV1,
  v4: uuidV4,
  ex14() {
    const v1 = uuidV1().split('');
    const v4 = uuidV4().split('');
    const e14 = [];
    const v1Length = v1.length;


    for (let i = 0; i < v1Length; i++) {
      e14.push(Math.round(Math.random()) ? v1[i] : v4[i]);
    }

    return e14.join('');
  },
};