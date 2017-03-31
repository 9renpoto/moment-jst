var moment = require('moment-timezone');

var JST = "Asia/Tokyo";

moment.jst = function(dt) {
  return this.tz(dt, JST);
}
moment.prototype.jst = function() {
  return this.tz(JST);
}

module.exports = moment;
